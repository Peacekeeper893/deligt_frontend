// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCduASoGiwO1t0UP_kpLKyskmMvpAKznAw",
  authDomain: "deligt-restaurant.firebaseapp.com",
  projectId: "deligt-restaurant",
  storageBucket: "deligt-restaurant.appspot.com",
  messagingSenderId: "1096634207624",
  appId: "1:1096634207624:web:182784fefcf5213ca27e3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;