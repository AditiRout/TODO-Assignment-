// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/functions";
// Your web app's Firebase configuration
firebase.initializeApp( {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:  process.env.REACT_APP_MESS,
  appId: process.env.REACT_APP_APPK
});

// Initialize Firebase

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
export default firebase;

