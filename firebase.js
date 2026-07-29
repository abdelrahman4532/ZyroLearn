
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQvZhrxn_STjT-_HF3bWalVu61JB6JZFM",
  authDomain: "zyrolearn.firebaseapp.com",
  projectId: "zyrolearn",
  storageBucket: "zyrolearn.firebasestorage.app",
  messagingSenderId: "547630969129",
  appId: "1:547630969129:web:5211810a17ee1e26a00738",
  measurementId: "G-RK1RK290TS"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
