import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCxTwWVynpgA-AMV6mlUymN_2shpFCh9I",
  authDomain: "e-com-mt.firebaseapp.com",
  projectId: "e-com-mt",
  storageBucket: "e-com-mt.appspot.com",
  messagingSenderId: "530282348180",
  appId: "1:530282348180:web:a5a6fc6be5f31e33413e81",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };