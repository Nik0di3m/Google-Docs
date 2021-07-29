import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHdNTxldn-9JiQ9Z1_kpjL719Q6YUhHBg",
    authDomain: "docs-cole.firebaseapp.com",
    projectId: "docs-cole",
    storageBucket: "docs-cole.appspot.com",
    messagingSenderId: "275684596892",
    appId: "1:275684596892:web:e1831b0cff58dafe972159"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export { db }