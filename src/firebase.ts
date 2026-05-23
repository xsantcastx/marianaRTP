import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getRemoteConfig, fetchAndActivate, getString } from "firebase/remote-config";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const rc = getRemoteConfig(app);
rc.settings.minimumFetchIntervalMillis = 3600000; // 1 hour cache

export async function getEmailJsConfig() {
  await fetchAndActivate(rc);
  return {
    serviceId:  getString(rc, 'emailjs_service_id'),
    templateId: getString(rc, 'emailjs_template_id'),
    publicKey:  getString(rc, 'emailjs_public_key'),
  };
}
