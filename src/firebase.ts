import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAszInO-Sxrq75M86c4w_SQRh8AM6rmfoQ",
  authDomain: "netflixclone-7c70f.firebaseapp.com",
  projectId: "netflixclone-7c70f",
  storageBucket: "netflixclone-7c70f.firebasestorage.app",
  messagingSenderId: "10712405445",
  appId: "1:10712405445:web:6ff8e651fdb1b011a1e7ac"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


const Signup = async (name , email , password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = resizeBy.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch(error){
        console.log(error);
        alert(error);
    }
}

const login = async (email , password) => {
    try{
        signInWithEmailAndPassword(auth, email, password);
    } catch(error){
        console.log(error)
        alert(error)
    }
}

const logout = () => {
    signOut(auth)
}

export {auth , db , login , signup , logout}