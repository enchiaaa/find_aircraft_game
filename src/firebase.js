// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, limit, getDocs, query, setDoc, orderBy, where, getDoc, doc, deleteDoc } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBleS2pj_ijPjgHiXkwqmCBBnk3Wx68Hl4",
    authDomain: "findaircraft-9f818.firebaseapp.com",
    projectId: "findaircraft-9f818",
    storageBucket: "findaircraft-9f818.firebasestorage.app",
    messagingSenderId: "884536783358",
    appId: "1:884536783358:web:d746cc48219ef5cf8d50af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();

const db = getFirestore(app);

export const addGrade = async (data) => {
    const gradesRef = collection(db, "grades");
    await addDoc(gradesRef, {
        name: data.name,
        grade: data.grade
    });
}

export const getAllGrades = async () => {
    const gradesRef = collection(db, "grades");
    const q = query(gradesRef, orderBy("grade"), limit(5));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
            name: data.name,
            grade: data.grade
        };
    });
};

export { auth, providerGoogle };