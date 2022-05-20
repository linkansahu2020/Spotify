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


export const signInWithGoogle = (value)=>{
    const provider = new GoogleAuthProvider();
    if(value==='signin'){
        signInWithPopup(auth,provider).then(async(result)=>{
            try{
                const response = await fetch('http://localhost:8080/signup',{
                    method: "POST",
                    body: JSON.stringify({
                        email: result.user.email,
                        password: "Google@1234",
                        display_name: result.user.email.split("@")[0],
                        display_picture: result.user.photoURL
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json();
                window.location.href = '/login'
            } catch(err){
                console.log("Error:",err);
            }
        }).catch(error=>{
            console.log("Error:", error)
        })
    } else{
        signInWithPopup(auth,provider).then(async(result)=>{
            try{
                const response = await fetch('http://localhost:8080/login',{
                    method: "POST",
                    body: JSON.stringify({
                        email: result.user.email,
                        password: "Google@1234"
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json();
                console.log(data);
                window.location.href = '/'
            } catch(err){
                console.log("Error:",err);
            }
        }).catch(error=>{
            console.log("Error:", error)
        })
    }
}

export const signInWithFacebook = ()=>{
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth,provider).then(result=>{
        return result.user
    }).catch(error=>{
        console.log("Error:", error);
    })
}