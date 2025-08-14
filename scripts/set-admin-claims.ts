/*
  Usage:
    pnpm tsx scripts/set-admin-claims.ts
  Ensures specified UIDs have admin role.
*/
import { adminAuth } from '../src/lib/firebase/admin';

async function createUserIfMissing(uid: string, email: string) {
  try {
    await adminAuth.createUser({ uid, email, emailVerified: true, disabled: false });
    console.log(`Created user ${email} (${uid}) in Auth emulator`);
  } catch (error: any) {
    // Ignore exists errors; proceed to set claims
    if (
      error &&
      (error.code === 'auth/uid-already-exists' || error.code === 'auth/email-already-exists')
    ) {
      return;
    }
    throw error;
  }
}

async function main() {
  const users: Array<{ uid: string; email: string }> = [
    { uid: 'VPdfojqIzgcN2GQRccaI7WnwWAy1', email: 'support@broadway-corp.com' },
    { uid: 'wGPWmJXr1nUUVV0ldWSZ0LF43tz1', email: 'teboh.n.gustave@broadway-corp.com' },
  ];

  for (const { uid, email } of users) {
    // When pointed at the Auth emulator, create the user if missing
    if (process.env.FIREBASE_AUTH_EMULATOR_HOST) {
      await createUserIfMissing(uid, email);
    }

    await adminAuth.setCustomUserClaims(uid, { role: 'admin' });
    console.log(`Set role=admin for ${email} (${uid})`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
