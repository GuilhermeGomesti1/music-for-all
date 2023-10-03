import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnRi7M4ISnNxgye7_4DNK8Y89ddlYmSl4",
  authDomain: "music-school-6392a.firebaseapp.com",
  projectId: "music-school-6392a",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
