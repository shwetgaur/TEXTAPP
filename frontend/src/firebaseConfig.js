import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnprTTJnE_u0_poyrrPiirtM1nGwxBrEI",
  authDomain: "textapp-5a7e2.firebaseapp.com",
  projectId: "textapp-5a7e2",
  storageBucket: "textapp-5a7e2.appspot.com",
  messagingSenderId: "561047692204",
  appId: "1:561047692204:web:8e36a619fecf8f10c71009",
  measurementId: "G-M5HV5DKJW9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore database

export { auth, db };
