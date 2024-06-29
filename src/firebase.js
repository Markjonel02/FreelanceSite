// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const APIKEY = import.meta.env.VITE_API_KEY;
const APP_ID = import.meta.env.VITE_APP_ID;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const AUTHDOMAIN = import.meta.env.VITE_AUTHDOMAIN;
const STORAGEBUCKET = import.meta.env.VITE_STORAGEBUCKET;
const MESSAGINGSENDER_ID = import.meta.env.VITE_MESSAGINGSENDER_ID;
/* const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID; */

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain:AUTHDOMAIN,
  projectId: PROJECT_ID,
  storageBucket:STORAGEBUCKET,
  messagingSenderId:MESSAGINGSENDER_ID, 
  appId: APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
/* export const timestamp = firebase.firestore.FieldValue.serverTimestamp(); */