// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "mern-antique.firebaseapp.com",
  projectId: "mern-antique",
  storageBucket: "mern-antique.appspot.com",
  messagingSenderId: "1096536485716",
  appId: "1:1096536485716:web:8fa35059595d6c017a62c1",
  measurementId: "G-1D5K96XL08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;