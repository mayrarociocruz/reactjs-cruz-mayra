import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmCCm7ffaZl51PVGyqQ8rqYRyWQ56g87U",
  authDomain: "cloudsport-jujuy1.firebaseapp.com",
  projectId: "cloudsport-jujuy1",
  storageBucket: "cloudsport-jujuy1.appspot.com",
  messagingSenderId: "621513837022",
  appId: "1:621513837022:web:5a1df97b67953d655db54f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicialize Cloud Firestore and get reference to the service
export const db = getFirestore(app);