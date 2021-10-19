import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebaseConfig';

const firebaseInitialize = () => {
     // Firebase Configuration Is A Secret \\
     initializeApp(firebaseConfig);
};

export default firebaseInitialize;