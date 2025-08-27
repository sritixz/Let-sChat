
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import{getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCz7Ln8IoQVW4pJZ4QCHhTOgpmxBCoFcjY",
  authDomain: "chat-608e2.firebaseapp.com",
  projectId: "chat-608e2",
  storageBucket: "chat-608e2.firebasestorage.app",
  messagingSenderId: "423302709146",
  appId: "1:423302709146:web:0d3f75b4c8125776470423",
  measurementId: "G-HYMQMLD5J4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore();