// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore for the database
import { getAuth } from "firebase/auth"; // Authentication for user authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUx5fNFYp84QJJuWclAjsW0lyDyCQV5S4",
  authDomain: "internship-review.firebaseapp.com",
  projectId: "internship-review",
  storageBucket: "internship-review.appspot.com",
  messagingSenderId: "596935212717",
  appId: "1:596935212717:web:9bb8d69e3e3cc2df739024",
  measurementId: "G-M8JPTVHD0G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
