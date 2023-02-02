import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import firebase from 'firebase/app';
// import { initializeApp } from 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB8UZNzkmRp0ZTPLcQ2PoC8A5m5uXZJBEg",
  authDomain: "crown-db-392e7.firebaseapp.com",
  projectId: "crown-db-392e7",
  storageBucket: "crown-db-392e7.appspot.com",
  messagingSenderId: "462779139692",
  appId: "1:462779139692:web:a18d140f0e8a90101e3a49",
  measurementId: "G-7F09R6T0RR"
};

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });

    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
  // console.log(snapShot);
};


// const firebase = initializeApp(config)
// const analytics = getAnalytics(firebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// export const auth = auth();
// export const firestore = firestore();


// google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
// export default analytics;