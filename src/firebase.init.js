// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp30-0KRG2xohYr0kK-Co7pIywLx8tVyg",
  authDomain: "bike-mania-6a3dd.firebaseapp.com",
  projectId: "bike-mania-6a3dd",
  storageBucket: "bike-mania-6a3dd.appspot.com",
  messagingSenderId: "475974614070",
  appId: "1:475974614070:web:9c518c16b27a93365cec97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;