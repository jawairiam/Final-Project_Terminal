import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCT7oUk16HAkn3tI5SR5SX3CAa1sT8EZB8",
    authDomain: "login-29cb1.firebaseapp.com",
    projectId: "login-29cb1",
    storageBucket: "login-29cb1.appspot.com",
    messagingSenderId: "603647649744",
    appId: "1:603647649744:web:4a63634c9bd024c2dc3bd5"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;