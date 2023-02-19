import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBNdunecUFr7rSIBEsPfyiGLiI3oI5Pajk",
    authDomain: "masterchef-d-town.firebaseapp.com",
    projectId: "masterchef-d-town",
    storageBucket: "masterchef-d-town.appspot.com",
    messagingSenderId: "42638337799",
    appId: "1:42638337799:web:f708fc2dad9c126452c7a2"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()

  export { projectFirestore}
