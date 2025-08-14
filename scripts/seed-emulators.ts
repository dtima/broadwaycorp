/*
  Seed Firebase emulators with minimal data for local development.
*/
import { initializeApp, cert, applicationDefault, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

function getAdminApp() {
  const apps = getApps();
  if (apps.length) return apps[0];
  return initializeApp({
    credential:
      process.env.FIREBASE_ADMIN_PRIVATE_KEY && process.env.FIREBASE_ADMIN_CLIENT_EMAIL
        ? cert({
            projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
            clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          })
        : applicationDefault(),
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID || 'demo-broadway',
  });
}

async function main() {
  const app = getAdminApp();
  const db = getFirestore(app);
  const auth = getAuth(app);

  // Seed divisions collection
  const divisions = ['farmhouse', 'enterprise', 'intelligence', 'resorts'];
  for (const d of divisions) {
    await db.collection('divisions').doc(d).set({ id: d, createdAt: new Date() });
  }

  // Seed an admin user claim example (requires a real uid in emulator)
  // Uncomment and set a known emulator uid if needed
  // await auth.setCustomUserClaims('<EMULATOR_UID>', { role: 'admin' });

  console.log('Emulators seeded.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
