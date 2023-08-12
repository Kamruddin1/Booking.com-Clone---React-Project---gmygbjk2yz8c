
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDJH5I5CtwQa4lhEOzmUslga07yVf8sCgI",
  authDomain: "booking-app-882e4.firebaseapp.com",
  projectId: "booking-app-882e4",
  storageBucket: "booking-app-882e4.appspot.com",
  messagingSenderId: "195031051401",
  appId: "1:195031051401:web:128e7342016ec8b659ea58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider}