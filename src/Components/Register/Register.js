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

    const [error, setError] = useState("")

    const { register, handleSubmit, formState: {
        errors

    } } = useForm({
        mode: "onChange"
    });
    console.log('err', errors)
    const onSubmit = (data) => {

        console.log('data', data)

        const eventData = {

            uName: data.uName,
            email: data.email,
            password: data.password,
            number: data.number,
            address: data.address
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
            .then(res => alert('User added Successfully', res))

        if (data.password && data.email) {
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    if (errorMessage) {
                        alert(errorMessage)
                    }
                });
        }



    };


    return (
        <section className="App mt-5">

            <h3>Sign In</h3>
            <form id="signedIn" onSubmit={handleSubmit(onSubmit)}>





                <input className="input" id="Name" type="text" placeholder="User Name"{...register('uName', {
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
                <input className="input" id="number" type="number" placeholder="Number" {...register('number', {
                    required: "this is a required", maxLength: {
                        value: 10,
                        message: "Max length is 10"
                    }
                })} /> <br />
                {errors.number && <p>{errors.number.message}</p>}
                <input className="input" id="address" type="text" placeholder="Address" {...register('address', {
                    required: "this is a required", maxLength: {
                        value: 10,
                        message: "Max length is 10"
                    }
                })} /> <br />
                {errors.address && <p>{errors.address.message}</p>}
                <input className="input" className="primary" type="submit" />



            </form>

            <p>Have any account? <Link to="/login">Log in</Link></p>

        </section>
    );
};

export default Register;
