 import * as firebase  from 'firebase/firebase'
 import 'firebase/storage'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBArzAsl7JVZD0xz-r6TInfLkclFdAEBO4",
  authDomain: "new-gallery-51819.firebaseapp.com",
  projectId: "new-gallery-51819",
  storageBucket: "new-gallery-51819.appspot.com",
  messagingSenderId: "595189184544",
  appId: "1:595189184544:web:3c977bf1378f6417d42445"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectFireStore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export   {projectStorage,projectFireStore,timestamp}