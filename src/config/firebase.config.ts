// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 4
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFMV5XHvtlXnS-lpmIT-A99I6v6KnXVIE",
  authDomain: "prueba-vue-5bdde.firebaseapp.com",
  projectId: "prueba-vue-5bdde",
  storageBucket: "prueba-vue-5bdde.appspot.com",
  messagingSenderId: "220389437411",
  appId: "1:220389437411:web:e54c940c8770f01b06bad6"
};

// authentication
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

// firestore
export const firestore = getFirestore(firebaseApp);

// Storage
export const storage = getStorage(firebaseApp);
