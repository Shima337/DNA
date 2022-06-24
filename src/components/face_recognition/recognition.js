// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMhnFYBMUfazux70IWuQOvC7gmRZaX9qE",
  authDomain: "geniousmachine-5aae8.firebaseapp.com",
  databaseURL:
    "https://geniousmachine-5aae8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "geniousmachine-5aae8",
  storageBucket: "geniousmachine-5aae8.appspot.com",
  messagingSenderId: "333627596024",
  appId: "1:333627596024:web:ae0a769825a9ec95872f0d",
  measurementId: "G-YCTXNCBN5H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default function Recognition() {
  console.log(database);
}
