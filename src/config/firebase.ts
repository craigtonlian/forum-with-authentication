// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPYWeSkL-7Esfl3kfW6aZ3Q7nXy0KDRxw",
  authDomain: "fir-react-app-cf95e.firebaseapp.com",
  projectId: "fir-react-app-cf95e",
  storageBucket: "fir-react-app-cf95e.appspot.com",
  messagingSenderId: "490974031558",
  appId: "1:490974031558:web:f735596e288165c94a71c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
