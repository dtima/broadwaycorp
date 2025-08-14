import { cookies } from 'next/headers';
import { adminAuth } from '@/lib/firebase/admin';

const SESSION_COOKIE_NAME = 'session';

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionCookie) return null;
  try {
    const decoded = await adminAuth.verifySessionCookie(sessionCookie, true);
    return decoded;
  } catch {
    return null;
  }
}

export { SESSION_COOKIE_NAME };
