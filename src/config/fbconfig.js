 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDEmnZj7ESlEXtptOoKCx7xrRmYvzRdjmE",
    authDomain: "project-management-3805b.firebaseapp.com",
    databaseURL: "https://project-management-3805b.firebaseio.com",
    projectId: "project-management-3805b",
    storageBucket: "project-management-3805b.appspot.com",
    messagingSenderId: "386150821110",
    appId: "1:386150821110:web:674eb0609bc48cad"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase