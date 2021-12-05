import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyDj9FoeVxZ7jFGX_gSFAEVefbc1wyMMOM8",
  authDomain: "to-do-list-525b9.firebaseapp.com",
  projectId: "to-do-list-525b9",
  storageBucket: "to-do-list-525b9.appspot.com",
  messagingSenderId: "48230609331",
  appId: "1:48230609331:web:118f295c1858b27d21dbc6",
  measurementId: "G-JTCCC2T50P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);