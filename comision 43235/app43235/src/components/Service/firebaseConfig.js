
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDX3YFlUg_O5xDpflT_PBV_MiLDLqBtqZw",
    authDomain: "tienda-del-gift.firebaseapp.com",
    projectId: "tienda-del-gift",
    storageBucket: "tienda-del-gift.appspot.com",
    messagingSenderId: "1043205859056",
    appId: "1:1043205859056:web:082280f30de28c477c0435"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)