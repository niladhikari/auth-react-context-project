// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY5KJTlicaswQsCwS43rKdJlv3TObjRAo",
  authDomain: "auth-react-context-proje-3710c.firebaseapp.com",
  projectId: "auth-react-context-proje-3710c",
  storageBucket: "auth-react-context-proje-3710c.appspot.com",
  messagingSenderId: "3084956735",
  appId: "1:3084956735:web:0d2679dad46cd2950f748a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;