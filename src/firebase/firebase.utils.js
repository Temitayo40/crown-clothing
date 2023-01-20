import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA2kSuT8PLVaIWqe_VTDdgyzDEYxRq5sDE",
  authDomain: "crown-db-69d6a.firebaseapp.com",
  projectId: "crown-db-69d6a",
  storageBucket: "crown-db-69d6a.appspot.com",
  messagingSenderId: "719238258146",
  appId: "1:719238258146:web:4fd65c649880d15b812dbb",
  measurementId: "G-1DFFTRL9YN",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
