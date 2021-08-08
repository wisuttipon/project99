import firebase from 'firebase/app'

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
        apiKey: "AIzaSyCtX-UN7iDsyhwpFNZhklWEvlRIhfa3-QY",
        authDomain: "real-project-c6a03.firebaseapp.com",
        projectId: "real-project-c6a03",
        storageBucket: "real-project-c6a03.appspot.com",
        messagingSenderId: "894013700751",
        appId: "1:894013700751:web:d60bc8643264edcdf18efa",
        measurementId: "G-JVSP1CHMZ5"
};
firebase.initializeApp(firebaseConfig);