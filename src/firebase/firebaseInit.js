import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQqmjbjA6zhAeMXDQiIeIbA0uhf8erFio",
    authDomain: "invoice-app-882b0.firebaseapp.com",
    projectId: "invoice-app-882b0",
    storageBucket: "invoice-app-882b0.appspot.com",
    messagingSenderId: "933746482465",
    appId: "1:933746482465:web:41478e8b1f20b183707260"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();