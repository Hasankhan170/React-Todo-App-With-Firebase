
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc0N7LNirK85s4CSEwmpffV95YPJE0GWg",
  authDomain: "react-todo-app-7f433.firebaseapp.com",
  projectId: "react-todo-app-7f433",
  storageBucket: "react-todo-app-7f433.appspot.com",
  messagingSenderId: "797932254430",
  appId: "1:797932254430:web:8355a6fb3e6b06a2cefe4f",
  measurementId: "G-4Q54Q1X3Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);