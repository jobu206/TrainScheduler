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

  let trainName = "";
  let destination = "";
  let startTime = "";
  let frequency = 0;