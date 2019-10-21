import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { config } from "./config";

// config firebase key
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// create user
export const createUserProfileDoccument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log('createUserProfileDoccument')
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { email, displayName } = userAuth;
    const createDate = new Date();
    try {
      userRef.set({
        email,
        displayName,
        createDate,
        ...additionalData
      });
    } catch (error) {
      console.log("createUserProfileDoccument is error", error.message);
    }
  }
  return userRef;
};

// auth google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
