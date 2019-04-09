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
let firstTrain = "";
var freq = 0;

// function to get current time
function currentTime() {
    let current = moment().format('LTS');
    $("#currentTime").html(current);
    setTimeout(currentTime, 1000);
};

// A variable to reference the database.
$("#train-submit-btn").on("click", function(event) {
    event.preventDefault();
    // Grab user input
    name = $("#train-name-input").val().trim();
    dest = $("#destination-input").val().trim();
    firstTrain = $("firstTrain-input").val().trim();
    freq = $("frequency-input").val().trim();
});


// Pushing to database


// Make train come first so 
// Handle the errors

// Change the HTML to reflect

// Need function for submit button
currentTime();

