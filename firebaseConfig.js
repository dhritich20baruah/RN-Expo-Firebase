import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore";
import {
  YOUR_API_KEY,
  YOUR_AUTH_DOMAIN,
  YOUR_PROJECT_ID,
  YOUR_STORAGE_BUCKET,
  YOUR_MESSAGING_SENDER_ID,
  YOUR_APP_ID,
  YOUR_MEASUREMENT_ID,
} from "@env";

const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  projectId: YOUR_PROJECT_ID,
  storageBucket: YOUR_STORAGE_BUCKET,
  messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  appId: YOUR_APP_ID,
  measurementId: YOUR_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

console.log("🔥 Firebase Initialized:", app.name); // Should log "[DEFAULT]"

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export { auth, db };
