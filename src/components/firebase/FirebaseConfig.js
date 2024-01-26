// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxW1oGzkWNOyZ-o44GRibYlxPk6wEzSyE",
  authDomain: "emailpasswordlogin-da92d.firebaseapp.com",
  projectId: "emailpasswordlogin-da92d",
  storageBucket: "emailpasswordlogin-da92d.appspot.com",
  messagingSenderId: "832983386121",
  appId: "1:832983386121:web:7fc6109c0caa2ae13150d8",
  measurementId: "G-DTL9RPD2GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app)