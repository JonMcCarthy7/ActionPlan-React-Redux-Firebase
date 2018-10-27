import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBaaLYZY7_u518SFobBIXhceCMh_mzrk64",
  authDomain: "react-redux-action-plan.firebaseapp.com",
  databaseURL: "https://react-redux-action-plan.firebaseio.com",
  projectId: "react-redux-action-plan",
  storageBucket: "react-redux-action-plan.appspot.com",
  messagingSenderId: "423460699645"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
