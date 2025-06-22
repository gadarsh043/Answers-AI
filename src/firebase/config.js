import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAayBIwSHAzyZqXBAd_bF8qHWNE_0ft_DU",
  authDomain: "answers-ai-6a107.firebaseapp.com",
  projectId: "answers-ai-6a107",
  storageBucket: "answers-ai-6a107.firebasestorage.app",
  messagingSenderId: "5039242136",
  appId: "1:5039242136:web:98887d79ce1a0bb26b49ed",
  measurementId: "G-M0YE15C94D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 