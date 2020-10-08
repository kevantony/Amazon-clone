import firebase from "firebase";

const firebaseConfig = {
  apiKey: "api key goes here",
  authDomain: "cl-b446a.firebaseapp.com",
  databaseURL: "https://cl-b446a.firebaseio.com",
  projectId: "cl-b446a",
  storageBucket: "cl-b446a.appspot.com",
  messagingSenderId: "436950547535",
  appId: "1:436950547535:web:4b701d079b691430fd3e3a",
  measurementId: "G-YNZHRZWK8G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
