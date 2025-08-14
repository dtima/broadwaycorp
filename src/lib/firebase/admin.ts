import { getApps, initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import fs from 'node:fs';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getStorage } from 'firebase-admin/storage';

function resolveCredential() {
  const jsonPath = process.env.FIREBASE_ADMIN_CREDENTIALS_PATH;
  
  if (jsonPath && fs.existsSync(jsonPath)) {
    const raw = fs.readFileSync(jsonPath, 'utf8');
    const svc = JSON.parse(raw) as {
      project_id: string;
      client_email: string;
      private_key: string;
    };
    return cert({
      projectId: svc.project_id,
      clientEmail: svc.client_email,
      privateKey: svc.private_key,
    });
  }

  if (process.env.FIREBASE_ADMIN_PRIVATE_KEY && process.env.FIREBASE_ADMIN_CLIENT_EMAIL) {
    return cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
  }

  return applicationDefault();
}

const app = getApps().length
  ? getApps()[0]
  : initializeApp({
      credential: resolveCredential(),
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    });

export const adminDb = getFirestore(app);
export const adminAuth = getAuth(app);
export const adminStorage = getStorage(app);
