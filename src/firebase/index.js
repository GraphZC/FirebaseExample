import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAzcX_bM_tSvzZ7M4EOYtOPlY0Y48Z5MQ",
    authDomain: "predevcamp-pets.firebaseapp.com",
    projectId: "predevcamp-pets",
    storageBucket: "predevcamp-pets.appspot.com",
    messagingSenderId: "832556041810",
    appId: "1:832556041810:web:a053792956bb1b7ad2818b",
    measurementId: "G-ZKPWMKYPLL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };