1. Create the boxes we need to create
2. Create the banner background image
3. Create the header 
4. Create the input section 
5. Create the todoItem list section
6. Set up our dataBase
7. Create the ability to save data in a firebase database
8. Create the funcionality to grab the data from the database




<script type="module">
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>