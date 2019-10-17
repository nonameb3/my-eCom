import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

// firebase private config
const config = {
  apiKey: "xxxxxx",
  authDomain: "xxxxxx",
  databaseURL: "xxxxxx",
  projectId: "xxxxxx",
  storageBucket: "xxxxxx",
  messagingSenderId: "xxxxxx",
  appId: "xxxxxx",
  measurementId: "xxxxxx"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
