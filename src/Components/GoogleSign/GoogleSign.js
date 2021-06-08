import React, { useState } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

const GoogleSign = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''

    })





    const provider = new firebase.auth.GoogleAuthProvider();
    const signInGoogle = () => {

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)

                console.log(displayName, email, photoURL);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // console.log(errorMessage)
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });


    }
    return (
        <div>
            {
                user.isSignedIn && <p>{user.name}</p>
               
            }
            {
               
                user.isSignedIn && <p>{user.email}</p> 
               
            }
            {
                
                user.isSignedIn && <img src={user.photo} alt="" />
            }
           <br />
            <button className="primary" onClick={signInGoogle}>Sign in with google</button>
        </div>
    );
};

export default GoogleSign;