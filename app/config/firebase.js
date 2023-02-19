import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHUZIsTXn2wUQKfZ-y_VIvrh6ai7nkPWM",
  authDomain: "fcc-instagram-b80dd.firebaseapp.com",
  projectId: "fcc-instagram-b80dd",
  storageBucket: "fcc-instagram-b80dd.appspot.com",
  messagingSenderId: "316311931387",
  appId: "1:316311931387:web:6e0f35ae264bfcceae235e",
  measurementId: "G-VBQKYEMQSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
