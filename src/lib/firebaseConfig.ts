import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ import storage

// Only initialize once (Next.js reload-safe)
const app = !getApps().length
  ? initializeApp({
      apiKey: "AIzaSyChc-fNM_AYvxINVNYEKWZhzsLuwseDLd0",
      authDomain: "elderease-ef8ca.firebaseapp.com",
      projectId: "elderease-ef8ca",
      storageBucket: "elderease-ef8ca.appspot.com",
      messagingSenderId: "594018006274",
      appId: "1:594018006274:web:7cc3b24c3c8f0031f4fe1b",
      measurementId: "G-B4EYPLNTQD",
    })
  : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // ✅ export storage

// ❌ Do NOT export analytics on server → causes "window is not defined"
export const getAnalyticsSafe = async () => {
  if (typeof window !== "undefined") {
    const { getAnalytics, isSupported } = await import("firebase/analytics");
    return (await isSupported()) ? getAnalytics(app) : null;
  }
  return null;
};

export default app;
