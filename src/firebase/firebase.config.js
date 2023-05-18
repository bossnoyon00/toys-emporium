// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1ZBYGLoDzoC74n4FGQfgodgY3y4lR-wM",
    authDomain: "toy-emporium-auth-e613c.firebaseapp.com",
    projectId: "toy-emporium-auth-e613c",
    storageBucket: "toy-emporium-auth-e613c.appspot.com",
    messagingSenderId: "565694626872",
    appId: "1:565694626872:web:44532d72db08a10a087acd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;