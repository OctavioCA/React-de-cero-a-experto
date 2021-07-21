import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// console.log( process.env )

const firebaseConfig = {
    apiKey: "AIzaSyBjsYgSKyWrMiaB6pC4A_G2xP4t5GYv12k",
    authDomain: "react-app-cursos-aa50f.firebaseapp.com",
    projectId: "react-app-cursos-aa50f",
    storageBucket: "react-app-cursos-aa50f.appspot.com",
    messagingSenderId: "867983533749",
    appId: "1:867983533749:web:f7ac2bc3f9597172e400fc"
  };

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyBbU9VFCmbVMhVatCXHBqcwJ7ashZavIM0",
//     authDomain: "react-app-cursos-tests.firebaseapp.com",
//     projectId: "react-app-cursos-tests",
//     storageBucket: "react-app-cursos-tests.appspot.com",
//     messagingSenderId: "142288106065",
//     appId: "1:142288106065:web:2e960796304a64776f7e70"
//   };

  // Inicialización
  firebase.initializeApp(firebaseConfig);
  
  // if( process.env.NODE_ENV === 'test' ) {
  //     // testing
  //     firebase.initializeApp(firebaseConfigTesting);
  //   } else {
  //       // dev/prod
  //       firebase.initializeApp(firebaseConfig);
  // }

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase,
  }