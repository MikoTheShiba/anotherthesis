// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcsybvoUwVgL5XN7scx4PKY43ztA8Qa3o",
  authDomain: "escription-24d8b.firebaseapp.com",
  databaseURL: "https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "escription-24d8b",
  storageBucket: "escription-24d8b.appspot.com",
  messagingSenderId: "440703625057",
  appId: "1:440703625057:web:9f49bebf39585001ba4720",
  measurementId: "G-132X605FEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);