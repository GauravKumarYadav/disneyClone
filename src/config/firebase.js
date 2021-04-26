// import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
// import 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZ7IgIFauQkniySOYdtJbSrxVaVGuAgCg",
    authDomain: "disney-plusclone.firebaseapp.com",
    projectId: "disney-plusclone",
    storageBucket: "disney-plusclone.appspot.com",
    messagingSenderId: "546681704370",
    appId: "1:546681704370:web:2ca6c0d151d81e955a5eab",
    measurementId: "G-X8Q03VXLQY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export default db;
export { auth, provider, storage };