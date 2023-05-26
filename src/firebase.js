// src/firebase.js
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  // Pega aquí la configuración de tu proyecto en Firebase
  apiKey: "AIzaSyBoD5DYh4YdW4xVgR5YCVhcOtaKWuRWFHI",
    authDomain: "gestor-tareas-8445c.firebaseapp.com",
    projectId: "gestor-tareas-8445c",
    storageBucket: "gestor-tareas-8445c.appspot.com",
    messagingSenderId: "502853380392",
    appId: "1:502853380392:web:a0b2e65633b4ca0e15481d"
};

initializeApp(firebaseConfig);

export const db = getFirestore();
