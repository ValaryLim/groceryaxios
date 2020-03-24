import firebase from 'firebase';

const firebaseConfig = {
  //Key in your database details
  apiKey: "AIzaSyDR5ZGNKSbpZ71uXOtH99-tX5qSWzgBr9M",
  authDomain: "bt3103-2020.firebaseapp.com",
  databaseURL: "https://bt3103-2020.firebaseio.com",
  projectId: "bt3103-2020"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;