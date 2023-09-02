import { initializeApp, FirebaseApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyDuMa7HGuH23t08n9oIDLCI7057NQIL31w",
  authDomain: "ibpc-prays.firebaseapp.com",
  projectId: "ibpc-prays",
  storageBucket: "ibpc-prays.appspot.com",
  messagingSenderId: "965521817633",
  appId: "1:965521817633:web:c7d2105035cc74a4202360",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
