import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase private config Firebase SDK snippet
const config = {
  apiKey: "xxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxxxx"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
