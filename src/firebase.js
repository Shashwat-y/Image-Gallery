 import * as firebase  from 'firebase/firebase'
 import 'firebase/storage'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyC1_XfKtkTuXMkq059x4gPvwnAiOyR_1Ns",
  authDomain: "image-gallery-b625f.firebaseapp.com",
  projectId: "image-gallery-b625f",
  storageBucket: "image-gallery-b625f.appspot.com",
  messagingSenderId: "861133406802",
  appId: "1:861133406802:web:e4e0ebd895512bf9fe158b",
  measurementId: "G-4ZH6BQL6DH"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectFireStore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export   {projectStorage,projectFireStore,timestamp}