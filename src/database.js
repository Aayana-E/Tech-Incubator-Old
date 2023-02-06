import Firebase from 'firebase/compat/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJNPbCtZj0AaX7GmizaNqcqz4vCEtsl5w",
    authDomain: "tech-incubator-d2208.firebaseapp.com",
    projectId: "tech-incubator-d2208",
    storageBucket: "tech-incubator-d2208.appspot.com",
    messagingSenderId: "239734403426",
    appId: "1:239734403426:web:583a5b7956485fd03cfc3b"
};

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };