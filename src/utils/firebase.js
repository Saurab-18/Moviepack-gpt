// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaqtaXFiH5MO8Se5Ykwu5GDSmnbWYVJ4g",
  authDomain: "moviepack-gpt.firebaseapp.com",
  projectId: "moviepack-gpt",
  storageBucket: "moviepack-gpt.appspot.com",
  messagingSenderId: "653212181328",
  appId: "1:653212181328:web:81b3eb6ab6ac6806a28255",
  measurementId: "G-0KWC1TVDFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();