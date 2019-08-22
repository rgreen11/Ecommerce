import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyA8zIIEFfSjTcBvykCzlUA49rc2mMUtuc4",
    authDomain: "ecommerce-1st-site.firebaseapp.com",
    databaseURL: "https://ecommerce-1st-site.firebaseio.com",
    projectId: "ecommerce-1st-site",
    storageBucket: "",
    messagingSenderId: "316829694350",
    appId: "1:316829694350:web:a98a53c3a49d5ba4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;