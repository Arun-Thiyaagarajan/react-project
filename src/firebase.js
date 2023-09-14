
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdgaT8rDJoLrYYhTmdjo3eLLuV18vl3KY",
  authDomain: "first-project-168a5.firebaseapp.com",
  projectId: "first-project-168a5",
  storageBucket: "first-project-168a5.appspot.com",
  messagingSenderId: "194005547336",
  appId: "1:194005547336:web:a1c49d53baa3216eefdb7d",
  measurementId: "G-6C5CW3JH48"
};


const app = initializeApp(firebaseConfig);
export const  auth=getAuth(app);