import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  requireUser,
  requireRole,
  requireCanManageEmployees,
  requireCanManageContent,
} from '@/lib/auth/rbac';
import { getCurrentUser } from '@/lib/auth/session';

// Mock the session module
vi.mock('@/lib/auth/session', () => ({
  getCurrentUser: vi.fn(),
}));

describe('RBAC System', () => {
  const mockGetCurrentUser = vi.mocked(getCurrentUser);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Create mock user objects that match DecodedIdToken interface
  const createMockUser = (role: string) => ({
    uid: 'user123',
    email: 'test@example.com',
    role,
    aud: 'test-aud',
    auth_time: 1234567890,
    exp: 1234567890,
    firebase: {
      identities: {},
      sign_in_provider: 'password',
    },
    iat: 1234567890,
    iss: 'test-iss',
    sub: 'user123',
  });

  describe('requireUser', () => {
    it('should pass when user exists', async () => {
      const mockUser = createMockUser('admin');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      const result = await requireUser();
      expect(result).toEqual(mockUser);
      expect(mockGetCurrentUser).toHaveBeenCalledOnce();
    });

    it('should throw UnauthorizedError when no user', async () => {
      mockGetCurrentUser.mockResolvedValue(null);

      await expect(requireUser()).rejects.toThrow('Unauthorized');
      expect(mockGetCurrentUser).toHaveBeenCalledOnce();
    });

    it('should throw UnauthorizedError when user is undefined', async () => {
      mockGetCurrentUser.mockResolvedValue(undefined as any);

      await expect(requireUser()).rejects.toThrow('Unauthorized');
      expect(mockGetCurrentUser).toHaveBeenCalledOnce();
    });
  });

  describe('requireRole', () => {
    it('should pass when user has exact role', async () => {
      const mockUser = createMockUser('admin');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      const result = await requireRole('admin');
      expect(result).toEqual(mockUser);
    });

    it('should pass when user has higher role than required', async () => {
      const mockUser = createMockUser('admin');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      const result = await requireRole('editor');
      expect(result).toEqual(mockUser);
    });

    it('should throw ForbiddenError when user has insufficient role', async () => {
      const mockUser = createMockUser('viewer');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      await expect(requireRole('admin')).rejects.toThrow('Insufficient permissions');
    });

    it('should throw ForbiddenError when user has lower role than required', async () => {
      const mockUser = createMockUser('editor');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      await expect(requireRole('admin')).rejects.toThrow('Insufficient permissions');
    });

    it('should throw UnauthorizedError when no user', async () => {
      mockGetCurrentUser.mockResolvedValue(null);

      await expect(requireRole('admin')).rejects.toThrow('Unauthorized');
    });
  });

  describe('requireCanManageEmployees', () => {
    it('should pass when user is admin', async () => {
      const mockUser = createMockUser('admin');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      const result = await requireCanManageEmployees();
      expect(result).toEqual(mockUser);
    });

    it('should throw ForbiddenError when user is editor', async () => {
      const mockUser = createMockUser('editor');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      await expect(requireCanManageEmployees()).rejects.toThrow('Insufficient permissions');
    });

    it('should throw ForbiddenError when user is viewer', async () => {
      const mockUser = createMockUser('viewer');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      await expect(requireCanManageEmployees()).rejects.toThrow('Insufficient permissions');
    });

    it('should throw UnauthorizedError when no user', async () => {
      mockGetCurrentUser.mockResolvedValue(null);

      await expect(requireCanManageEmployees()).rejects.toThrow('Unauthorized');
    });
  });

  describe('requireCanManageContent', () => {
    it('should pass when user is admin', async () => {
      const mockUser = createMockUser('admin');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      const result = await requireCanManageContent();
      expect(result).toEqual(mockUser);
    });

    it('should pass when user is editor', async () => {
      const mockUser = createMockUser('editor');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      const result = await requireCanManageContent();
      expect(result).toEqual(mockUser);
    });

    it('should throw ForbiddenError when user is viewer', async () => {
      const mockUser = createMockUser('viewer');
      mockGetCurrentUser.mockResolvedValue(mockUser);

      await expect(requireCanManageContent()).rejects.toThrow('Insufficient permissions');
    });

    it('should throw UnauthorizedError when no user', async () => {
      mockGetCurrentUser.mockResolvedValue(null);

      await expect(requireCanManageContent()).rejects.toThrow('Unauthorized');
    });
  });

  describe('Role hierarchy validation', () => {
    it('should enforce correct role hierarchy', async () => {
      const roleTests = [
        { role: 'admin', canManageEmployees: true, canManageContent: true },
        { role: 'editor', canManageEmployees: false, canManageContent: true },
        { role: 'viewer', canManageEmployees: false, canManageContent: false },
      ];

      for (const test of roleTests) {
        const mockUser = createMockUser(test.role);

        if (test.canManageEmployees) {
          await expect(requireCanManageEmployees()).resolves.toEqual(mockUser);
        } else {
          await expect(requireCanManageEmployees()).rejects.toThrow('Insufficient permissions');
        }

        if (test.canManageContent) {
          await expect(requireCanManageContent()).resolves.toEqual(mockUser);
        } else {
          await expect(requireCanManageContent()).rejects.toThrow('Insufficient permissions');
        }
      }
    });
  });
});
