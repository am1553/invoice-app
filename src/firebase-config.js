import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD9A6k_MRYeqPeDWD00_nT54XpiJqhCceU",
  authDomain: "invoice-app-5c49d.firebaseapp.com",
  projectId: "invoice-app-5c49d",
  storageBucket: "invoice-app-5c49d.appspot.com",
  messagingSenderId: "493872054021",
  appId: "1:493872054021:web:e1b67fdb76ed09f124016c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)