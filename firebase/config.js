// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmjhytu7L9CeIoVJDOpI6oGAz0vvE-tZQ",
  authDomain: "my-native-app-b8f91.firebaseapp.com",
  projectId: "my-native-app-b8f91",
  storageBucket: "my-native-app-b8f91.appspot.com",
  messagingSenderId: "19215589978",
  appId: "1:19215589978:web:d61bdc2b9055d0fc072e63",
  storageBucket: "gs://my-native-app-b8f91.appspot.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
