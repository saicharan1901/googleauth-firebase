import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAPLifTFL33dvsdAcLhZWSqtvbR72qHop8",
  authDomain: "auth-7ec71.firebaseapp.com",
  projectId: "auth-7ec71",
  storageBucket: "auth-7ec71.appspot.com",
  messagingSenderId: "999701155447",
  appId: "1:999701155447:web:4a00379e82d0a940cf8072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
