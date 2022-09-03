// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc3MoYwYDedrpzth5CTsc0kRjAIIKZQiM",
  authDomain: "tools-manufacturer-websi-dedfa.firebaseapp.com",
  projectId: "tools-manufacturer-websi-dedfa",
  storageBucket: "tools-manufacturer-websi-dedfa.appspot.com",
  messagingSenderId: "495322455820",
  appId: "1:495322455820:web:695e2e747acb1a3bf7b329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;