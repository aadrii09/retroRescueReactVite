import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "retro-rescue.firebaseapp.com",
    projectId: "retro-rescue",
    storageBucket: "retro-rescue.firebasestorage.app",
    messagingSenderId: "789685658640",
    appId: "1:789685658640:web:d7ca5e4dfc1be5a0dbd695"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {auth, db};