import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAemKqQMLaKf0gEF5zciaK3sSE4q9y6bAA",
  authDomain: "clone-6b305.firebaseapp.com",
  projectId: "clone-6b305",
  storageBucket: "clone-6b305.appspot.com",
  messagingSenderId: "700130987976",
  appId: "1:700130987976:web:e1689165a923d162657afd",
  measurementId: "G-RYXYKWNBNH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };