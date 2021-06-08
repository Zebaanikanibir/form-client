import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';
import {
   
    Link
  } from "react-router-dom";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }





const Register = () => {
    
    const  [error, setError] = useState("")
    
    const { register, handleSubmit, formState: {
        errors

    } } = useForm({
        mode: "onChange"
    });
    console.log('err', errors)
    const onSubmit = (data) => {
    
        console.log('data',data)

        const eventData = {
            fName: data.fName,
            lName: data.lName,
            uName: data.uName,
            email: data.email,
            password: data.password,
            cPassword: data.cPassword

        }



        const url = `https://polar-meadow-65365.herokuapp.com/registered`
        console.log(eventData)

        fetch(url, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => alert('Registered', res))

            if(data.uName && data.password){
                firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
              // Signed in 
              var user = userCredential.user;
              console.log(user)
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              
              if(errorMessage){
                  alert(errorMessage)
              }
            });
            }
            // firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            // .then((userCredential) => {
            //   // Signed in
            //   var user = userCredential.user;
            //   // ...
            // })
            // .catch((error) => {
            //   var errorCode = error.code;
            //   var errorMessage = error.message;
            // });


    };


    return (
        <section className="App mt-5">

              <h3>Sign In</h3>
            <form id="signedIn" onSubmit={handleSubmit(onSubmit)}>

                <input className="input" id="fName" type="text" placeholder="First Name"{...register('fName', {
                    required: "this is a required", maxLength: {
                        value: 3,
                        message: "Max length is 3"
                    }
                })} /> <br />
                {errors.fName && <p>{errors.fName.message}</p>}
                <input className="input" id="lName" type="text" placeholder="Last Name"{...register('lName', { required: "this is a required" })} /> <br />
                {errors.lName && <p>{errors.lName.message}</p>}
                

               
                <input className="input" id="Name" type="text" placeholder="User Name"{...register('uName',{
                    required: true, maxLength: {
                        value: 30,
                        message: "Max length is 30"
                    },
                    pattern: {
                        value:
                            /^(?!^\.)(?!.*[-_.]$)[a-zA-Z0-9_.]+$/
                        ,
                        message: "Not matches with pattern"
                    }
                })} /> <br />
                {errors.uName && <p>{errors.uName.message}</p>}
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
                        message: "Max length is 10"
                    }
                })} /> <br />
                {errors.password && <p>{errors.password.message}</p>}
                <input className="input" id="cPassword" type="password" placeholder="confirm password" {...register('cPassword', {
                    required: "this is a required", maxLength: {
                        value: 10,
                        message: "Max length is 10"
                    }
                })} /> <br />
                {errors.cPassword && <p>{errors.cPassword.message}</p>}
                <input className="input" className="primary" type="submit"/>

                  

            </form>

            <p>Have any account? <Link to="/login">Log in</Link></p>

        </section>
    );
};

export default Register;
