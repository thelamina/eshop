import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvIN_wVfQi00Jhn1yE4YOR0MyhEdsxApE",
  authDomain: "eshop-react.firebaseapp.com",
  databaseURL: "https://eshop-react.firebaseio.com",
  projectId: "eshop-react",
  storageBucket: "eshop-react.appspot.com",
  messagingSenderId: "926187885359",
  appId: "1:926187885359:web:7e782622afdaffb13d87da",
  measurementId: "G-PGG8T5F4NM",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// GOOGLE AUTH
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
