// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtI2jmszwDifVRWtH3XL6NAJeRdaR6VhM",
    authDomain: "contex-components-daisy.firebaseapp.com",
    projectId: "contex-components-daisy",
    storageBucket: "contex-components-daisy.appspot.com",
    messagingSenderId: "528912334395",
    appId: "1:528912334395:web:fc92de334a7085727ee61e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;