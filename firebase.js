// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs4T78aigjdNAIOZXSBHbdea_CUEsLIJ4",
  authDomain: "tinder-2-me.firebaseapp.com",
  projectId: "tinder-2-me",
  storageBucket: "tinder-2-me.appspot.com",
  messagingSenderId: "470401112993",
  appId: "1:470401112993:web:b6ce0250f3c602bbbc09e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db }