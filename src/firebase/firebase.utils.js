import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA5FFQ72PcckgfetfY4k_QvhgsxTfn5GeQ",
    authDomain: "crwn-db-4ccc6.firebaseapp.com",
    projectId: "crwn-db-4ccc6",
    storageBucket: "crwn-db-4ccc6.appspot.com",
    messagingSenderId: "398211067247",
    appId: "1:398211067247:web:0afa08431776c6dbdb0c9a"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;