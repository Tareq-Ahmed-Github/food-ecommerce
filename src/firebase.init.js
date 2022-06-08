// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqx8JyGVyQcRjtDkqvs6jblbr5S1YbFmk",
  authDomain: "food-ecommerce-cc480.firebaseapp.com",
  projectId: "food-ecommerce-cc480",
  storageBucket: "food-ecommerce-cc480.appspot.com",
  messagingSenderId: "1066723758430",
  appId: "1:1066723758430:web:0b4c5227995380e025bfcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;