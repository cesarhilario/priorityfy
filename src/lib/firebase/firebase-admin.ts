import * as admin from "firebase-admin";
import { getAuth as getAdminAuth } from "firebase-admin/auth";

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.GOOGLE_CREDENTIALS!);
  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const getAuth = () => getAdminAuth();
