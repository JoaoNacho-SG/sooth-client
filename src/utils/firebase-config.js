import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH}`,
  projectId: "sg-soho",
  storageBucket: "sg-soho.appspot.com",
  messagingSenderId: "895704943607",
  appId: "1:895704943607:web:65c2c1770c895c1d2efcf2",
  measurementId: "G-LQ10RSEYBS",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
