import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6MDLJnTY18ORZs5d8Peu0a9eCQ7rkTJY",
  authDomain: "nexflix-clone-313bf.firebaseapp.com",
  projectId: "nexflix-clone-313bf",
  storageBucket: "nexflix-clone-313bf.appspot.com",
  messagingSenderId: "815408838763",
  appId: "1:815408838763:web:2e204cc254e62e97ced92e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
