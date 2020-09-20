import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCvw1Pt_jL95SKZnhMOzJn09jqTiWdEZXU",
  authDomain: "generic-ecommerce-app.firebaseapp.com",
  databaseURL: "https://generic-ecommerce-app.firebaseio.com",
  projectId: "generic-ecommerce-app",
  storageBucket: "generic-ecommerce-app.appspot.com",
  messagingSenderId: "491785841811",
  appId: "1:491785841811:web:5d1f52a88d5e34083eb166"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
