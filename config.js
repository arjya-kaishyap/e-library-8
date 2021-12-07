import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC4NYrssORbz7b7QL6gkPNs5QXQ0KRulTo",
  authDomain: "e-library-a3f59.firebaseapp.com",
  projectId: "e-library-a3f59",
  storageBucket: "e-library-a3f59.appspot.com",
  messagingSenderId: "518490570840",
  appId: "1:518490570840:web:739809141f8036ba498a2d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
