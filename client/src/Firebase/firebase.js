import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEimkQBJH3jmg8AZlrBKOCXqljSqsXdlU",
  authDomain: "spotify-clone-fd10c.firebaseapp.com",
  projectId: "spotify-clone-fd10c",
  storageBucket: "spotify-clone-fd10c.appspot.com",
  messagingSenderId: "201711967421",
  appId: "1:201711967421:web:279d787f3f87597cc06bd4",
  measurementId: "G-R0EYFBDJG9"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);


export const signInWithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider).then(result=>{
        console.log(result)
    }).catch(error=>{
        console.log(error)
    })
}

export const signInWithFacebook = ()=>{
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth,provider).then(result=>{
        console.log(result);
    }).catch(error=>{
        console.log(error);
    })
}