// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "my-blog-app-7b12d.firebaseapp.com",
  projectId: "my-blog-app-7b12d",
  storageBucket: "my-blog-app-7b12d.firebasestorage.app",
  messagingSenderId: "692353617699",
  appId: "1:692353617699:web:910b3afb6a51d06d9c0696"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);