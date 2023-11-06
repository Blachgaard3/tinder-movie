import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
       apiKey: "AIzaSyCMjCjB8HvWoG8n0bJhGA2dUbqY00alu-g",
       authDomain: "moviemagnetuser.firebaseapp.com",
       projectId: "moviemagnetuser",
       storageBucket: "moviemagnetuser.appspot.com",
       messagingSenderId: "1051985693107",
       appId: "1:1051985693107:web:eadad8e069f711a0d963c6"
     };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app); 


export { app, auth, db, };