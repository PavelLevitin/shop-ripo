import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyCxDJU8XuHno1fw6N3gtvaMjC79Qa4bvKA",
    authDomain: "e-shop-db-4a5f1.firebaseapp.com",
    databaseURL: "https://e-shop-db-4a5f1.firebaseio.com",
    projectId: "e-shop-db-4a5f1",
    storageBucket: "e-shop-db-4a5f1.appspot.com",
    messagingSenderId: "1017864441193",
    appId: "1:1017864441193:web:659b0f4702a37fdf7a81f8",
    measurementId: "G-85KGG1JNKJ"
  }


  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore()

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle=() => auth.signInWithPopup(provider);

  export default firebase;