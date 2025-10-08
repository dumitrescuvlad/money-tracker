import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const extras = (Constants.expoConfig?.extra as any) ?? {};
const firebaseConfig = extras.firebase ?? {};

if (!firebaseConfig?.apiKey) {
  console.warn("[firebase] Missing EXPO_PUBLIC_FIREBASE_* envs.");
}

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const firestore = getFirestore(app);
