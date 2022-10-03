import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyB6deLInxjskKtGOCb4k5qconp-rDoPnqE",
  authDomain: "rethink-547b4.firebaseapp.com",
  projectId: "rethink-547b4",
  storageBucket: "rethink-547b4.appspot.com",
  messagingSenderId: "503076282595",
  appId: "1:503076282595:web:097d6f9301d0d240dd25d6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.name;
    })
    .catch((error) => {
        alert(error);
    })
}