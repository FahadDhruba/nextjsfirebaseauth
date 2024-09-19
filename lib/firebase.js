// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBt9_5qWzR2XV4KybIopVxcRO_S42IVTVE",
  authDomain: "nextjsauth-ba82b.firebaseapp.com",
  projectId: "nextjsauth-ba82b",
  storageBucket: "nextjsauth-ba82b.appspot.com",
  messagingSenderId: "832412259150",
  appId: "1:832412259150:web:13d456f84fda53f4f6441f",
  measurementId: "G-E3MXQQJ6V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
