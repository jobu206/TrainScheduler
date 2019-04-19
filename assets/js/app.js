
// Initialize Firebase
const config = {
    apiKey: "AIzaSyBaP8mxdJtO6rWiQk9RFUSPbIS4bifWa4o",
    authDomain: "trainscheduler-6a56c.firebaseapp.com",
    databaseURL: "https://trainscheduler-6a56c.firebaseio.com",
    projectId: "trainscheduler-6a56c",
    storageBucket: "trainscheduler-6a56c.appspot.com",
    messagingSenderId: "804462883977"
};
firebase.initializeApp(config);
// A variable to reference the database.
const database = firebase.database();

function currentTime() {
    let current = moment().format('LT');
    $("#currentTime").html(current);
    setTimeout(currentTime, 1000);
};

// Add a new Train
$("#add-train").on("click", function (event) {
    event.preventDefault();
    // Grab values from text boxes
    let trainName = $("#trainName-input").val().trim();
    let trainDest = $("#trainDest-input").val().trim();
    let firstTrainTime = $("#firstTrain-input").val().trim();
    let trainFreq = $("#trainFreq-input").val().trim();

    // Push to the DB
    let newTrain = {
        tName: trainName,
        tDest: trainDest,
        fTrainTime: firstTrainTime,
        tFreq: trainFreq
    };
    database.ref().push(newTrain);

    // clear form
    $("#trainName-input").val("");
    $("#trainDest-input").val("");
    $("#firstTrain-input").val("");
    $("#trainFreq-input").val("");

});

// child snapshot function.
database.ref().on("child_added", function (childSnapshot) {
    let trainName = childSnapshot.val().tName;
    let trainDest = childSnapshot.val().tDest;
    let firstTrainTime = childSnapshot.val().fTrainTime;
    let trainFreq = childSnapshot.val().tFreq;
    let firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");
    let diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    let tRemainder = diffTime % trainFreq;
    let tMinutesTilTrain = trainFreq - tRemainder;

    // calculate the next train time in UTC.
    let nextTrain = moment().add(tMinutesTilTrain, "minutes");
    // This is to convert the next Train time to local time w/o seconds. 
    let newTime = nextTrain.format('LT');

    // change HTML
    let tRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDest),
        $("<td>").text(trainFreq),
        $("<td>").text(newTime),
        $("<td>").text(tMinutesTilTrain)
    )
    $("#train-table > tbody").append(tRow);
});
currentTime();