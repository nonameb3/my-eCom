import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { config } from "./config";

// config firebase key
const privateConfig = process.env.REACT_APP_FIREBASE_CONFIG_STRINGIFY;
let firebaseConfig = config;

if (privateConfig) {
  firebaseConfig = JSON.parse(privateConfig);
}
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/**
 * Create new user document to user collection at firestore
 * @param  {String} userAuth user data from firebase
 * @param  {Object} additionalData other data to add
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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

/**
 * Add Collection to firebase
 * @param {String} collectionKey The key for colection
 * @param {Array} objectItems The collection and items to add
 */
export const addCollectionAndDocument = async (
  collectionKey,
  objectItems = []
) => {
  // find collection by Key
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectItems.forEach(item => {
    // create new document with uniqueid
    const doc = collectionRef.doc();
    batch.set(doc, { title: item.title, items: item.items });
  });

  await batch.commit();
};

// auth google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
