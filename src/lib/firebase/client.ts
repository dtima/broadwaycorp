import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { connectFirestoreEmulator } from 'firebase/firestore';

let app: FirebaseApp | undefined;

export function getFirebaseApp() {
  if (!app) {
    const apps = getApps();

    // Validate all required environment variables
    const requiredEnvs = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    const missingEnvs = Object.entries(requiredEnvs)
      .filter(([_, value]) => !value)
      .map(([key]) => `NEXT_PUBLIC_FIREBASE_${key.toUpperCase()}`);

    if (missingEnvs.length > 0) {
      const error = `Missing Firebase environment variables: ${missingEnvs.join(', ')}. Check .env.local and restart dev server.`;
      console.error(error);
      throw new Error(error);
    }

    app = apps.length
      ? apps[0]
      : initializeApp({
          ...requiredEnvs,
          measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
        });

    console.log('Firebase app initialized:', {
      projectId: requiredEnvs.projectId,
      authDomain: requiredEnvs.authDomain,
      environment: process.env.NODE_ENV,
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    });
  }
  return app!;
}

export const firebaseAuth = () => {
  const auth = getAuth(getFirebaseApp());

  // Only connect to emulator in development with explicit flag
  if (
    process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true' &&
    process.env.NODE_ENV === 'development' &&
    typeof window !== 'undefined' &&
    window.location.hostname === 'localhost'
  ) {
    try {
      // @ts-expect-error internal guard
      if (!auth._canInitEmulator) {
        connectAuthEmulator(auth, 'http://127.0.0.1:9099');
        console.log('Connected to Firebase Auth emulator');
      }
    } catch (error) {
      console.warn('Failed to connect to Firebase Auth emulator:', error);
      // Continue with production Firebase
    }
  } else {
    console.log('Using production Firebase Auth:', {
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      currentOrigin: typeof window !== 'undefined' ? window.location.origin : 'server',
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    });
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
