// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// for google signin
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrNpygAarG2ItQsFdKRCNvv38Pg4F-SVQ",
    authDomain: "airbnb-clone-f87ed.firebaseapp.com",
    projectId: "airbnb-clone-f87ed",
    storageBucket: "airbnb-clone-f87ed.firebasestorage.app",
    messagingSenderId: "862245460279",
    appId: "1:862245460279:web:295aec51461ded526162b2",
    measurementId: "G-DM5N80ESS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// export { auth, googleProvider, analytics, signInWithPopup } 