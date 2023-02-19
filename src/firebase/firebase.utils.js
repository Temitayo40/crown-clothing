import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDjy4zLjuef1uSQh24bkilVJjNNlj1xcG8",
  authDomain: "crwn-ltd.firebaseapp.com",
  projectId: "crwn-ltd",
  storageBucket: "crwn-ltd.appspot.com",
  messagingSenderId: "214325879315",
  appId: "1:214325879315:web:da858e581ad346a70715e6",
};

export const creatUserprofileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
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

// {
//   apiKey: "AIzaSyA2kSuT8PLVaIWqe_VTDdgyzDEYxRq5sDE",
//   authDomain: "crown-db-69d6a.firebaseapp.com",
//   projectId: "crown-db-69d6a",
//   storageBucket: "crown-db-69d6a.appspot.com",
//   messagingSenderId: "719238258146",
//   appId: "1:719238258146:web:4fd65c649880d15b812dbb",
//   measurementId: "G-1DFFTRL9YN",
// };
