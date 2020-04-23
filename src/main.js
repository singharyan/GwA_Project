import './main.pcss';
import App from './App.svelte';

// Import the Firebase Services you want bundled and call initializeApp
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/performance';
import 'firebase/analytics';

const firebaseConfig = {
apiKey: "AIzaSyAws8G8ubo9wDxBURCMD2loSXW3ZSxccis",
authDomain: "grow-with-aryan.firebaseapp.com",
databaseURL: "https://grow-with-aryan.firebaseio.com",
projectId: "grow-with-aryan",
storageBucket: "grow-with-aryan.appspot.com",
messagingSenderId: "278056669997",
appId: "1:278056669997:web:4b4bc6cc07dcf6a9fbb9a4",
measurementId: "G-GFM7H0X3YL"
};

firebase.initializeApp(firebaseConfig);

export {firebase};

const app = new App({
    target: document.body
});