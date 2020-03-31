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

  // This following function allows us to get the uid from the User Object returned
  // with Google Sign In (userAuth), and store it in our db
  // this will be async because it's an API request (we'll be using get an set)

  // this function will be called whenever we need an OAuth object (so in App.js)
  // inside componentWillMount()
  
  // we pass in the object and any additional data (which will be from user sign-
  // up without Google), which will also be an object
  export const createUserProfileDocument = async (userAuth, additionalData) => {
  // first we want to make sure the user is logged in and the user object exists
    if(!userAuth) return;   // if it doesn't exist, exit from function

    // if it does exist, we need to query the firestore to see if there is a doc stored
      // we do this with a .get()

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();   // .get() pulls off a snapshot object

    // if snapShot doesn't exist, then we want to CREATE a space for it in the db
    if(!snapShot.exists) {
      // as a rule, we need to use the documentRef() object to perform any CRUD methods
        // before we create it, we want to determine which properties we will want to store
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // we use .set() to create an object with the properties above and the additionalData
        // which is an object itself
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })

        } catch (error) {
          console.log('error creating user', error.message);
        }
    }
    // ultimately, we want to return the userRef in case we need to use it in our code
    return userRef;


  }




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