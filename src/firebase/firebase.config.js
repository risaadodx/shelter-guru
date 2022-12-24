import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // COnfig code goes here
  apiKey: "AIzaSyA4Q6ABpBXOi77G04Y52vjt2UAJw4ur-Bs",
  authDomain: "shelter-guru.firebaseapp.com",
  projectId: "shelter-guru",
  storageBucket: "shelter-guru.appspot.com",
  messagingSenderId: "502918699619",
  appId: "1:502918699619:web:23b68edd4f7ebe71057656",
};

const app = initializeApp(firebaseConfig);

export default app;
