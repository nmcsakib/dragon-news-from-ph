// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqjMQ4hIhr44IWUcWM7g7MpNeF5cbN5xs",
  authDomain: "dragon-auth-9ffbd.firebaseapp.com",
  projectId: "dragon-auth-9ffbd",
  storageBucket: "dragon-auth-9ffbd.firebasestorage.app",
  messagingSenderId: "638125901953",
  appId: "1:638125901953:web:4a3e28fa066783d645e580",
  measurementId: "G-R153K41LRS"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
