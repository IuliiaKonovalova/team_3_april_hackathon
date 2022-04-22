// variables

const playerName = document.getElementById('player');
const playerScore = document.getElementById('score');
const gameTime = document.getElementById('time');
const leaderBoard = document.getElementById('leaderboard');
const submitButton = document.getElementById('submit');

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASaBo-IKrI_uIiqaDcdATD7tHy_pxG5ek",
    authDomain: "garbage-run.firebaseapp.com",
    projectId: "garbage-run",
    storageBucket: "garbage-run.appspot.com",
    messagingSenderId: "910761622590",
    appId: "1:910761622590:web:fcd7da8142e75a7f49e56f",
    measurementId: "G-4VH550WLEV",
    databaseURL: "garbage-run.firebaseapp.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);
var database = app.databaseURL();
var ref = database.ref('scores');


submitButton.addEventListener('click', function () {
    var data = {
        name: playerName.innerHTML,
        score: playerScore.innerHTML
    }
    console.log(data);
    console.log("hello");
    var ref = database.ref('scores');
    ref.push(data);
})

