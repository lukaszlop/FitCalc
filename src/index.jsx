import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Firebase
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyClA2b3Ihc5AALq1kIlQ_QfEz1t9yRDpzE",
    authDomain: "samuraicalc.firebaseapp.com",
    databaseURL: "https://samuraicalc.firebaseio.com",
    projectId: "samuraicalc",
    storageBucket: "samuraicalc.appspot.com",
    messagingSenderId: "939179195210",
    appId: "1:939179195210:web:c07c3d19303e62cfd9dfb3",
    measurementId: "G-GS8F43BJDE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render( < App / > , document.getElementById('root'));