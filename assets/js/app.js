// Initialize Firebase
const config = {
    apiKey: "AIzaSyBYnc8j8pYiDuD3OPuvYVXDqImcVEQ_WSo",
    authDomain: "train-schedule-d3d15.firebaseapp.com",
    databaseURL: "https://train-schedule-d3d15.firebaseio.com",
    projectId: "train-schedule-d3d15",
    storageBucket: "train-schedule-d3d15.appspot.com",
    messagingSenderId: "154322965757"
};
firebase.initializeApp(config);
const db = firebase.database();

// Initialize Variables
let name = "";
let dest = "";
let startTime = "";
let freq = 0;

// function to get current time
function currentTime() {
    let current = moment().format('LTS');
    $("#currentTime").html(current);
    setTimeout(currentTime, 1000);
};

// Need function to pull out values from input fields


// Need function to save in db


// Need function for submit button
currentTime();

