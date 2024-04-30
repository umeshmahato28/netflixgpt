// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVHZHjUp8dSgFcUn-MfvnDC13HL-X75jo",
  authDomain: "netflixgpt-28.firebaseapp.com",
  projectId: "netflixgpt-28",
  storageBucket: "netflixgpt-28.appspot.com",
  messagingSenderId: "418658450650",
  appId: "1:418658450650:web:a9002b43f5eaed881c39e3",
  measurementId: "G-F9CBV5XKSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();