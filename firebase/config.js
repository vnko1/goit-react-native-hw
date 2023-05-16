import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOTuRjcJCDncj9T6J7H3L9Fyqhi2JqHf4",
  authDomain: "my-native-app-b8dbf.firebaseapp.com",
  projectId: "my-native-app-b8dbf",
  storageBucket: "my-native-app-b8dbf.appspot.com",
  messagingSenderId: "85604399217",
  appId: "1:85604399217:web:b17947f699911b4926c3d0",
  storageBucket: "gs://my-native-app-b8dbf.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const storage = getStorage(app);
export const db = getFirestore(app);
