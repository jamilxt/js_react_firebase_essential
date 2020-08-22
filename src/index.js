import React from "react";
import ReactDOM from "react-dom";

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

import "./index.css";
import { App, serviceWorker } from "./app";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlG3oZmGMeaQxKIvFUcYdgNa-6DofaxE0",
  authDomain: "restaurant-reservations-jxt.firebaseapp.com",
  databaseURL: "https://restaurant-reservations-jxt.firebaseio.com",
  projectId: "restaurant-reservations-jxt",
  storageBucket: "restaurant-reservations-jxt.appspot.com",
  messagingSenderId: "665160787954",
  appId: "1:665160787954:web:12a5e03abdcd5083526d6b",
  measurementId: "G-93NSQGQSZG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
