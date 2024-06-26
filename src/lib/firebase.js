import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-4261a.firebaseapp.com",
  projectId: "reactchat-4261a",
  storageBucket: "reactchat-4261a.appspot.com",
  messagingSenderId: "392444190424",
  appId: "1:392444190424:web:ec5aab1bca3c0d54ca81ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
