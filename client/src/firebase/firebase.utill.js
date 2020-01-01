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

// auth google
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;

//#region createUserProfileDocument fn
/**
 * Create new user document to user collection at firestore
 * @param  {String} userAuth user data from firebase
 * @param  {Object} additionalData other data to add
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // create user document
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

  // create usersCart document
  const cartRef = firestore.doc(`usersCart/${userAuth.uid}`);
  const cartSnapShot = await cartRef.get();

  if (!cartSnapShot.exists) {
    try {
      let data = {
        id: userAuth.uid,
        createDate: new Date(),
        lastUpdate: new Date(),
        items: []
      };

      // Add a new document in collection "usersCart" with ID from user
      await cartRef.set(data);
    } catch (error) {
      console.log("addCartItems on firestore is error", error.message);
    }
  }

  return userRef;
};
//#endregion

//#region addCollectionAndDocument fn
/**
 * Add Collection to firebase
 * @param {String} collectionKey The key for colection
 * @param {Array} objectItems The collection and items to add
 */
export const addCollectionAndDocument = async (
  collectionKey, // collections
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
//#endregion

/**
 * Convert Collections snapshot from firebase to array
 * @param {Object} collections Oject collections snapshot from firestore
 */
export const convertCollectionsToSnapshot = collections => {
  const collectionsSnapshot = collections.docs.map(document => {
    const { title, items } = document.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: document.id,
      title,
      items
    };
  });

  // map array to hash table
  return collectionsSnapshot.reduce((accumulator, currentValue) => {
    accumulator[currentValue.title.toLowerCase()] = currentValue;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
