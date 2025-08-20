'use server';
import { cookies } from 'next/headers';
import { firebaseAuth } from '@/lib/firebase/client';
import { SESSION_COOKIE_NAME } from '@/lib/auth/session';
import { getAuth } from 'firebase-admin/auth';

// Note: In Next.js, creating session cookies from client creds is typically done via an API Route.
// For simplicity, we accept an ID token and mint a Firebase session cookie server-side.

export async function createSession(idToken: string, locale: string) {
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
  const sessionCookie = await getAuth().createSessionCookie(idToken, { expiresIn });
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionCookie, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: expiresIn / 1000,
  });

  // Ensure proper locale handling to prevent double slashes
  const cleanLocale = locale?.trim() || 'en';
  return { ok: true, redirect: `/${cleanLocale}/admin` };
}

export async function destroySession(locale: string) {
  const cookieStore = await cookies();

  try {
    cookieStore.delete(SESSION_COOKIE_NAME);
  } catch (error) {
    // Log error but don't fail the operation
    console.error('Failed to delete session cookie:', error);
  }

  // Ensure proper locale handling to prevent double slashes
  const cleanLocale = locale?.trim() || 'en';
  return { ok: true, redirect: `/${cleanLocale}/admin/sign-in` };
}
