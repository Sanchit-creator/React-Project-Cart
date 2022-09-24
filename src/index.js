import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Step 1 line 4,7
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Step 2 line 11 tp 22
const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyCPj_N36nswoHbj8VCcV7JoX2e5YL4ENhE",
  authDomain: "cart-49d40.firebaseapp.com",
  projectId: "cart-49d40",
  storageBucket: "cart-49d40.appspot.com",
  messagingSenderId: "772396498848",
  appId: "1:772396498848:web:e6d6a949a3626e23f46ec5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
