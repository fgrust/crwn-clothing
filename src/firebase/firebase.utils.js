import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAkMmuU8hCgEmvBkwPo5ysMW-EBt-8VBDE",
  authDomain: "crwn-db-36c14.firebaseapp.com",
  databaseURL: "https://crwn-db-36c14.firebaseio.com",
  projectId: "crwn-db-36c14",
  storageBucket: "",
  messagingSenderId: "125494534862",
  appId: "1:125494534862:web:e9060a5c5b483f946ae69f",
  measurementId: "G-XGM1X4BGK7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating  user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
