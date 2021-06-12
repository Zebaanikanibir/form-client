import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase/app"
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

import {
   
    Link
  } from "react-router-dom";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, formState: {
        errors

    } } = useForm({
        mode: "onChange"
    });
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password:''

    })
const onSubmit =(data) =>{
    
    
    if(data.email&& data.password){
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then((userCredential) => {
      // Signed in
     
      const { displayName, email, photoURL, password } = userCredential.user;
      const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          password:password
      }
      setUser(signedInUser)
      setLoggedInUser(signedInUser);
      console.log(displayName, email, password);
      storeAuthToken()
      history.replace(from);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorMessage){
     alert(errorMessage)
      }
    });
    }
    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            console.log('token', idToken)
           sessionStorage.setItem('token', idToken)
    setTimeout(function() {
    sessionStorage.clear()
    },300000)

           history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }
}



    return (
        <div className="App mt-5">
            <h3>Log In</h3>
              <form id="logedIn" onSubmit={handleSubmit(onSubmit)}>
             
                <input className="input" id="email" type="email" placeholder="Enter Email"{...register('email', {
                    required: "this is a required", pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email address"
                    }
                })} /> <br />
                {errors.email && <p>{errors.email.message}</p>}
              <input className="input" id="password" type="password" placeholder="password" {...register('password', {
                    required: "this is a required", maxLength: {
                        value: 10,
                        message: "incorrect"
                    }
                })} /> <br />
                {errors.password && <p>{errors.password.message}</p>}
                <input className="input primary" type="submit" />
              </form>
              <p>register here  <Link to="/register">Register</Link></p>
              

            
        </div>
    );
};

export default Login;