/* jshint esversion: 8, jquery: true */
// variables
const submitButton = document.getElementById('submit');

// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";

import {
  getDatabase,
  ref,
  set
} from 'https://garbage-run-default-rtdb.europe-west1.firebasedatabase.app/';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASaBo-IKrI_uIiqaDcdATD7tHy_pxG5ek",
  authDomain: "garbage-run.firebaseapp.com",

  databaseURL: "https://garbage-run-default-rtdb.europe-west1.firebasedatabase.app/",

  projectId: "garbage-run",
  storageBucket: "garbage-run.appspot.com",
  messagingSenderId: "910761622590",
  appId: "1:910761622590:web:fcd7da8142e75a7f49e56f",

  measurementId: "G-4VH550WLEV"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


submitButton.addEventListener('click', sendData);

function sendData(name, score) {
  name = document.getElementById('name');
  score = document.getElementById('score');
  set(ref(db, 'users/'), {
    username: name,
    score: score,
  });
}