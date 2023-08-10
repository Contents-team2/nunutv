import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig, 'myfirebaseapp');

const dbUrl = "https://nunutv-c9b2c-default-rtdb.asia-southeast1.firebasedatabase.app/"
const storageUrl = "gs://nunutv-c9b2c.appspot.com"

const database = getDatabase(app, dbUrl);
const storage = getStorage(app, storageUrl);
const auth = getAuth(app)

export { database, storage, auth };

export default app;