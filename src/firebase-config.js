import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

{/* //dude in video said dont publish these two on github for security purposes;  apiKey: "AIzaSyD_DmVT_9pkoTAAGLDFH3M-VyPqPbp6orI",
    authDomain: "diceworkout-authentication.firebaseapp.com",*/}
const firebaseConfig = {
    apiKey: "AIzaSyD_DmVT_9pkoTAAGLDFH3M-VyPqPbp6orI",
    authDomain: "diceworkout-authentication.firebaseapp.com",
    projectId: "diceworkout-authentication",
    storageBucket: "diceworkout-authentication.appspot.com",
    messagingSenderId: "111035621236",
    appId: "1:111035621236:web:4daba52c75a951234a5621",
    measurementId: "G-Q26SY71EWM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);