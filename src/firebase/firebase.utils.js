import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA_wLe7UBRMsmXRXidVu7gPLyhCHNkarlk",
    authDomain: "crwn-db-c0b27.firebaseapp.com",
    databaseURL: "https://crwn-db-c0b27.firebaseio.com",
    projectId: "crwn-db-c0b27",
    storageBucket: "crwn-db-c0b27.appspot.com",
    messagingSenderId: "1078880916643",
    appId: "1:1078880916643:web:f3b40a3b1e35cecee69b16",
    measurementId: "G-ZTESL4LRTR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;