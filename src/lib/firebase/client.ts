import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { connectFirestoreEmulator } from 'firebase/firestore';

let app: FirebaseApp | undefined;

export function getFirebaseApp() {
  if (!app) {
    const apps = getApps();
    app = apps.length
      ? apps[0]
      : initializeApp({
          apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
          authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
          measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
        });
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
      // Surface a helpful error early if envs are missing
      // eslint-disable-next-line no-console
      console.error(
        'Missing Firebase env vars. Check .env.local for NEXT_PUBLIC_FIREBASE_* values and restart dev server.'
      );
    }
  }
  return app!;
}

export const firebaseAuth = () => {
  const auth = getAuth(getFirebaseApp());
  if (
    process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true' &&
    process.env.NODE_ENV !== 'production'
  ) {
    try {
      // @ts-expect-error internal guard
      if (!auth._canInitEmulator) connectAuthEmulator(auth, 'http://127.0.0.1:9099');
    } catch {
      // ignore
    }
  }
  return auth;
};
export const firestore = () => {
  const db = getFirestore(getFirebaseApp());
  if (
    process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true' &&
    process.env.NODE_ENV !== 'production'
  ) {
    try {
      // Avoid duplicate emulator connection
      // @ts-expect-error private
      if (!db._settingsFrozen) connectFirestoreEmulator(db, '127.0.0.1', 8080);
    } catch (e) {
      // no-op
    }
  }
  return db;
};
export const storage = () => getStorage(getFirebaseApp());
