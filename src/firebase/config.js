import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEsux9LnquOP4dPGRSXZA5Ea1B0vjc3yc",
  authDomain: "miniblog-4b035.firebaseapp.com",
  projectId: "miniblog-4b035",
  storageBucket: "miniblog-4b035.appspot.com",
  messagingSenderId: "873691756980",
  appId: "1:873691756980:web:d20ef52c76ea52fe4fdae1",
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };