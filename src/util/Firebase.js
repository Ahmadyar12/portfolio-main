
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyArmfVWEXCzCF6Pkm9-D5NB7BKwcr--M78",
    authDomain: "portfolio-fdb25.firebaseapp.com",
    projectId: "portfolio-fdb25",
    storageBucket: "portfolio-fdb25.firebasestorage.app",
    messagingSenderId: "979358174925",
    appId: "1:979358174925:web:f1ce409e19c0519e35e384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };