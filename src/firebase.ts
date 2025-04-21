
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAszInO-Sxrq75M86c4w_SQRh8AM6rmfoQ",
  authDomain: "netflixclone-7c70f.firebaseapp.com",
  projectId: "netflixclone-7c70f",
  storageBucket: "netflixclone-7c70f.firebasestorage.app",
  messagingSenderId: "10712405445",
  appId: "1:10712405445:web:6ff8e651fdb1b011a1e7ac",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name: string, email: string, password: string): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("YOu Signed in")
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const logout = (): void => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
