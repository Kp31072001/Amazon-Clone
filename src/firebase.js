// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBES5kIzTbfDU-9_8FnGvsqzPSLwD9OdH4",
  authDomain: "e-clone-dac2a.firebaseapp.com",
  projectId: "e-clone-dac2a",
  storageBucket: "e-clone-dac2a.appspot.com",
  messagingSenderId: "114054733874",
  appId: "1:114054733874:web:9a3fe97eef358f38ca5c2b",
  measurementId: "G-JMN3WMFL3L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()
export {db, auth};