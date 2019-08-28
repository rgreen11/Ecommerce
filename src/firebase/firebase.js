import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { async } from 'q';



const firebaseConfig = {
    apiKey: "AIzaSyA8zIIEFfSjTcBvykCzlUA49rc2mMUtuc4",
    authDomain: "ecommerce-1st-site.firebaseapp.com",
    databaseURL: "https://ecommerce-1st-site.firebaseio.com",
    projectId: "ecommerce-1st-site",
    storageBucket: "",
    messagingSenderId: "316829694350",
    appId: "1:316829694350:web:a98a53c3a49d5ba4"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) =>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

        if(!snapShot.exists){
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch(error ){
                console.log('error creating user', error)
            }
        }

        return userRef

  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;