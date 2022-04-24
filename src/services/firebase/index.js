import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBARDwFaJ1mkR0r5KTg52wTIdXCB_0qDc0",
  authDomain: "coderhouse-react-f14cf.firebaseapp.com",
  projectId: "coderhouse-react-f14cf",
  storageBucket: "coderhouse-react-f14cf.appspot.com",
  messagingSenderId: "174483255355",
  appId: "1:174483255355:web:a1124b78beef672da3ec1e"
};

const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)