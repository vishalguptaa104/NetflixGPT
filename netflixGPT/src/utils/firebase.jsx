// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXoF-FGSR_Bet_VMNbkXN8LEWePnsa44U",
  authDomain: "netflixgpt-27e47.firebaseapp.com",
  projectId: "netflixgpt-27e47",
  storageBucket: "netflixgpt-27e47.firebasestorage.app",
  messagingSenderId: "977452977517",
  appId: "1:977452977517:web:302df9aa0655b6083b1e64"
};
// session id
//1AED6

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
