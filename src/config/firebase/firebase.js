// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC67kOtjgry5zF5w51VEYW5zNpVy_qljC0",
  authDomain: "first-firebase-edd81.firebaseapp.com",
  projectId: "first-firebase-edd81",
  storageBucket: "first-firebase-edd81.appspot.com",
  messagingSenderId: "1085540478995",
  appId: "1:1085540478995:web:8e17b348b8fb37dab3cfe6",
  measurementId: "G-0WT2PPS01B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export default app;