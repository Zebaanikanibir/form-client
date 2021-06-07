import React, { useState } from 'react';


const Register = () => {
    const [register, setRegister] = useState({})

    console.log('done', register?.email)
    const handleBlur = e => {
       
        const newRegister = {...register};
        newRegister[e.target.name] = e.target.value;

        setRegister(newRegister)



    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
       
        formData.append("email",{email:"email"})
        // formData.append({password: "password"})
        console.log('form', formData)
        fetch('http://localhost:5000/registered', {
            method: 'POST',
            body: formData
            
        })
            .then(response => response.json())
            .then(data => {
                alert('Registered Successfully')
            })
            .catch(error => {
                console.error(error)
            })
       
        e.target.reset()
        
    } 


    return (
        <section>

            <form onSubmit={handleSubmit}>
                <div className="form-group">

                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">password</label>
                    <input onBlur={handleBlur} type="password" className="form-control" id="exampleInputPassword1" placeholder="password" name="password" />
                </div>
                <button type="submit" className="sPrimary">Submit</button>
            </form>




            

        </section>
    );
};

export default Register;