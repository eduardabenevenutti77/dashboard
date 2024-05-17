// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6DGE4Zvvavs2g8bXHDarZ-uM3caD4qOs",
  authDomain: "dashboard-67645.firebaseapp.com",
  projectId: "dashboard-67645",
  storageBucket: "dashboard-67645.appspot.com",
  messagingSenderId: "217068199236",
  appId: "1:217068199236:web:5b2c7f8e647c1f0cc90b11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// USE A VERSÃO MODULAR DO FIREBASE!!!
export const auth = getAuth(app);