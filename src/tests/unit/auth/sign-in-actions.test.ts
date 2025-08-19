import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { cookies } from 'next/headers';
import { getAuth } from 'firebase-admin/auth';
import { createSession, destroySession } from '@/app/(auth)/[locale]/actions/sign-in';
import { SESSION_COOKIE_NAME } from '@/lib/auth/session';

// Mock Next.js headers
vi.mock('next/headers', () => ({
  cookies: vi.fn(),
}));

// Mock Firebase Admin Auth
vi.mock('firebase-admin/auth', () => ({
  getAuth: vi.fn(),
}));

// Mock Firebase client (not used in server actions but imported)
vi.mock('@/lib/firebase/client', () => ({
  firebaseAuth: vi.fn(),
}));

describe('Sign-in Server Actions', () => {
  const mockCookieStore = {
    set: vi.fn(),
    delete: vi.fn(),
  };
  const mockAuth = {
    createSessionCookie: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (cookies as any).mockResolvedValue(mockCookieStore);
    (getAuth as any).mockReturnValue(mockAuth);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('createSession', () => {
    it('should create session cookie and redirect to admin dashboard', async () => {
      const idToken = 'mock-id-token';
      const locale = 'en';
      const sessionCookie = 'mock-session-cookie';

      mockAuth.createSessionCookie.mockResolvedValue(sessionCookie);

      const result = await createSession(idToken, locale);

      expect(mockAuth.createSessionCookie).toHaveBeenCalledWith(idToken, {
        expiresIn: 60 * 60 * 24 * 5 * 1000,
      });

      expect(mockCookieStore.set).toHaveBeenCalledWith(SESSION_COOKIE_NAME, sessionCookie, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 5,
      });

      expect(result).toEqual({
        ok: true,
        redirect: '/en/admin',
      });
    });

    it('should handle French locale correctly', async () => {
      const idToken = 'mock-id-token';
      const locale = 'fr';
      const sessionCookie = 'mock-session-cookie';

      mockAuth.createSessionCookie.mockResolvedValue(sessionCookie);

      const result = await createSession(idToken, locale);

      expect(result).toEqual({
        ok: true,
        redirect: '/fr/admin',
      });
    });

    it('should handle Firebase Admin errors gracefully', async () => {
      const idToken = 'invalid-token';
      const locale = 'en';

      mockAuth.createSessionCookie.mockRejectedValue(new Error('Invalid ID token'));

      await expect(createSession(idToken, locale)).rejects.toThrow('Invalid ID token');

      expect(mockCookieStore.set).not.toHaveBeenCalled();
    });

    it('should set correct cookie expiration time', async () => {
      const idToken = 'mock-id-token';
      const locale = 'en';
      const sessionCookie = 'mock-session-cookie';
      const expectedExpiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days in milliseconds

      mockAuth.createSessionCookie.mockResolvedValue(sessionCookie);

      await createSession(idToken, locale);

      expect(mockAuth.createSessionCookie).toHaveBeenCalledWith(idToken, {
        expiresIn: expectedExpiresIn,
      });

      expect(mockCookieStore.set).toHaveBeenCalledWith(
        SESSION_COOKIE_NAME,
        sessionCookie,
        expect.objectContaining({
          maxAge: expectedExpiresIn / 1000, // maxAge is in seconds
        })
      );
    });
  });

  describe('destroySession', () => {
    it('should delete session cookie and redirect to sign-in page', async () => {
      const locale = 'en';

      const result = await destroySession(locale);

      expect(mockCookieStore.delete).toHaveBeenCalledWith(SESSION_COOKIE_NAME);

      expect(result).toEqual({
        ok: true,
        redirect: '/en/admin/sign-in',
      });
    });

    it('should handle French locale correctly', async () => {
      const locale = 'fr';

      const result = await destroySession(locale);

      expect(result).toEqual({
        ok: true,
        redirect: '/fr/admin/sign-in',
      });
    });

    it('should always succeed even if cookie deletion fails', async () => {
      const locale = 'en';

      mockCookieStore.delete.mockImplementation(() => {
        throw new Error('Cookie deletion failed');
      });

      // Should not throw - the function should handle errors gracefully
      const result = await destroySession(locale);

      expect(result).toEqual({
        ok: true,
        redirect: '/en/admin/sign-in',
      });
    });
  });

  describe('Session Security', () => {
    it('should set secure cookie attributes', async () => {
      const idToken = 'mock-id-token';
      const locale = 'en';
      const sessionCookie = 'mock-session-cookie';

      mockAuth.createSessionCookie.mockResolvedValue(sessionCookie);

      await createSession(idToken, locale);

      expect(mockCookieStore.set).toHaveBeenCalledWith(
        SESSION_COOKIE_NAME,
        sessionCookie,
        expect.objectContaining({
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          path: '/',
        })
      );
    });

    it('should use correct session cookie name', async () => {
      const idToken = 'mock-id-token';
      const locale = 'en';
      const sessionCookie = 'mock-session-cookie';

      mockAuth.createSessionCookie.mockResolvedValue(sessionCookie);

      await createSession(idToken, locale);

      expect(mockCookieStore.set).toHaveBeenCalledWith(
        SESSION_COOKIE_NAME,
        sessionCookie,
        expect.any(Object)
      );
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle empty ID token', async () => {
      const idToken = '';
      const locale = 'en';

      mockAuth.createSessionCookie.mockRejectedValue(new Error('Empty ID token'));

      await expect(createSession(idToken, locale)).rejects.toThrow('Empty ID token');
    });

    it('should handle malformed ID token', async () => {
      const idToken = 'malformed.token.here';
      const locale = 'en';

      mockAuth.createSessionCookie.mockRejectedValue(new Error('Malformed ID token'));

      await expect(createSession(idToken, locale)).rejects.toThrow('Malformed ID token');
    });

    it('should handle expired ID token', async () => {
      const idToken = 'expired-token';
      const locale = 'en';

      mockAuth.createSessionCookie.mockRejectedValue(new Error('ID token expired'));

      await expect(createSession(idToken, locale)).rejects.toThrow('ID token expired');
    });

    it('should handle missing locale gracefully', async () => {
      const idToken = 'mock-id-token';
      const locale = ''; // Empty locale
      const sessionCookie = 'mock-session-cookie';

      mockAuth.createSessionCookie.mockResolvedValue(sessionCookie);

      const result = await createSession(idToken, locale);

      expect(result).toEqual({
        ok: true,
        redirect: '/admin', // Should still work with empty locale
      });
    });
  });

  describe('Integration with Firebase Admin', () => {
    it('should call Firebase Admin with correct parameters', async () => {
      const idToken = 'valid-id-token';
      const locale = 'en';
      const expectedExpiresIn = 60 * 60 * 24 * 5 * 1000;

      mockAuth.createSessionCookie.mockResolvedValue('session-cookie');

      await createSession(idToken, locale);

      expect(getAuth).toHaveBeenCalled();
      expect(mockAuth.createSessionCookie).toHaveBeenCalledWith(idToken, {
        expiresIn: expectedExpiresIn,
      });
    });

    it('should propagate Firebase Admin errors', async () => {
      const idToken = 'mock-id-token';
      const locale = 'en';
      const firebaseError = new Error('Firebase service unavailable');

      mockAuth.createSessionCookie.mockRejectedValue(firebaseError);

      await expect(createSession(idToken, locale)).rejects.toThrow('Firebase service unavailable');
    });
  });
});
