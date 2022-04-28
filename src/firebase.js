// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY_UCLTHpVYsRxaoCJ0aT5iy0uowMi0f8",
  authDomain: "quiz-project-ce6b7.firebaseapp.com",
  projectId: "quiz-project-ce6b7",
  storageBucket: "quiz-project-ce6b7.appspot.com",
  messagingSenderId: "965785802505",
  appId: "1:965785802505:web:5d8bb5c6bd0b194ac7e5d8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
