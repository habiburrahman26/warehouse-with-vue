// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUjjdEs69ftYaX03iT3jgFqPebSk3Vx0M",
  authDomain: "vue-warehouse-ca09f.firebaseapp.com",
  projectId: "vue-warehouse-ca09f",
  storageBucket: "vue-warehouse-ca09f.appspot.com",
  messagingSenderId: "933751336994",
  appId: "1:933751336994:web:c8691e1d33bdc19a021a7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
