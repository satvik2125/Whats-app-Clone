import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAuAYgYV1D2b5edpw2p1_jFrPm098QDyfo",
    authDomain: "whatsapp-firebase-yt-7f660.firebaseapp.com",
    projectId: "whatsapp-firebase-yt-7f660",
    storageBucket: "whatsapp-firebase-yt-7f660.appspot.com",
    messagingSenderId: "761745437462",
    appId: "1:761745437462:web:195ef21d4bc4d54ee85637"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db