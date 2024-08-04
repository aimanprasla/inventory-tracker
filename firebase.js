// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIwlwsDRf7AZXAM6bZQjdEgMjWOO9T-EQ",
  authDomain: "inventory-management-cb990.firebaseapp.com",
  projectId: "inventory-management-cb990",
  storageBucket: "inventory-management-cb990.appspot.com",
  messagingSenderId: "734516103111",
  appId: "1:734516103111:web:23564b962b7d34b1e7bbe2",
  measurementId: "G-SBFRPKGBEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}