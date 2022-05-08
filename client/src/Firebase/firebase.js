import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCEimkQBJH3jmg8AZlrBKOCXqljSqsXdlU",
    authDomain: "spotify-clone-fd10c.firebaseapp.com",
    projectId: "spotify-clone-fd10c",
    storageBucket: "spotify-clone-fd10c.appspot.com",
    messagingSenderId: "201711967421",
    appId: "1:201711967421:web:279d787f3f87597cc06bd4",
    measurementId: "G-R0EYFBDJG9"
})

export const auth = app.auth();
export default app;

// import { initializeApp } from 'firebase/app';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);