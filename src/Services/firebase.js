// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp9VbbwJzFAe50xMtuDm6k5VEsESPgkgE",
  authDomain: "aero-6f943.firebaseapp.com",
  projectId: "aero-6f943",
  storageBucket: "aero-6f943.firebasestorage.app",
  messagingSenderId: "705415055020",
  appId: "1:705415055020:web:13393f01144ec4f6acc109",
  measurementId: "G-87FN9FMWKM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();