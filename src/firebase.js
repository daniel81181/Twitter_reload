// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import {ref, getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcNSNnv4eWMAKPDEf9I6_uFdnY99JU7QY",
    authDomain: "twitterbetter124.firebaseapp.com",
    databaseURL: "https://twitterbetter124-default-rtdb.firebaseio.com/",
    projectId: "twitterbetter124",
    storageBucket: "twitterbetter124.appspot.com",
    messagingSenderId: "250422402557",
    appId: "1:250422402557:web:94bc261fbadcbe6ec20d94",
    measurementId: "G-G8LZSXSVL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db =getDatabase();

export default app;
