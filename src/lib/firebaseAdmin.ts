import admin from 'firebase-admin';
import serviceAccountJson from './serviceAccountKey.json';
import { ServiceAccount } from 'firebase-admin';

const serviceAccount = {
  ...serviceAccountJson,
  private_key: serviceAccountJson.private_key.replace(/\\n/g, '\n'),
} as ServiceAccount;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
