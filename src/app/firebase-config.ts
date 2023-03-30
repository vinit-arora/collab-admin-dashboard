import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // TODO: Replace with your app's Firebase project configuration
    projectId: 'facebook-clone-c2cff',
    appId: '1:669529628191:web:849c8141767b0bed387f2a',
    databaseURL: 'https://facebook-clone-c2cff-default-rtdb.firebaseio.com',
    storageBucket: 'facebook-clone-c2cff.appspot.com',
    apiKey: 'AIzaSyAcFeBB6ggHnhOdFIXmcDF3VLi8i6CVNaY',
    authDomain: 'facebook-clone-c2cff.firebaseapp.com',
    messagingSenderId: '669529628191',
    measurementId: 'G-5JVZJ5NYPJ',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { firebaseConfig, db };
