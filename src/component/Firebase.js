import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseApp=firebase.initializeApp({
  
    apiKey: "AIzaSyDTKmbXZiUXmRO8i7vOjqr3D-FL1Ul0WlQ",
    authDomain: "shoes-store-dcb2e.firebaseapp.com",
    databaseURL: "https://shoes-store-dcb2e.firebaseio.com",
    projectId: "shoes-store-dcb2e",
    storageBucket: "shoes-store-dcb2e.appspot.com",
    messagingSenderId: "38076598063",
    appId: "1:38076598063:web:7391b8b0bea232909a03da"
  
})
var db = firebaseApp.firestore();
export   {db};