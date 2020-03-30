import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpr6j5XGg8ZarhLTjpWHQT_S08hD7lhRY",
    authDomain: "crown-clothing-93ad8.firebaseapp.com",
    databaseURL: "https://crown-clothing-93ad8.firebaseio.com",
    projectId: "crown-clothing-93ad8",
    storageBucket: "crown-clothing-93ad8.appspot.com",
    messagingSenderId: "983917000932",
    appId: "1:983917000932:web:aa492c16392bc4769154f1",
    measurementId: "G-92N21M5TJN"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

// Google Authentication Utility

  const provider = new firebase.auth.GoogleAuthProvider();
//   above gives us access to GoogleAuthentication class from the auth library
  provider.setCustomParameters({ prompt: 'select_account' });
//   that class from above takes parameter which we can set using the setCustomParameters method
//   above param makes it so always trigger the google popup whenever 
//   we use the GoogleAuthProvider or 'provider' for authentication and sign in
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
//   sign in with popup could be a lot of things (twitter, insta, etc) so we pass
//   it the provider which mean sign in with Google
    //  further config to allow Google sign in is done within firebase

  export default firebase;