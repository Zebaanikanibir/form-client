import React from 'react';
import { useForm } from 'react-hook-form';

const NewRegister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input id="name" {...register('name', { required: true, maxLength: 30 })} />
      {errors.name && errors.name.type === "required" && <span>This is required</span>}
      {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
      <input id="fName" type="text" placeholder="First Name"{...register('fName', {
                    required: "this is a required", maxLength: {
                        value: 3,
                        message: "Max length is 3"
                    }
                })} /> <br />
                {errors.fName && <p>{errors.fName.message}</p>}
                <input id="lName" type="text" placeholder="Last Name"{...register('lName', { required: "this is a required" })} /> <br />
                {errors.lName && <p>{errors.lName.message}</p>}
                <input type="text" {...register('test')}/> <br />
<input id="Name" type="text" placeholder="User Name"{...register('uName',{
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
                <input id="email" type="email" placeholder="Enter Email"{...register('email', {
                    required: "this is a required", pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email address"
                    }
                })} /> <br />
                {errors.email && <p>{errors.email.message}</p>}
<input id="password" type="password" placeholder="password" {...register('password', {
                    required: "this is a required", maxLength: {
                        value: 10,
                        message: "Max length is 10"
                    }
                })} /> <br />
                {errors.password && <p>{errors.password.message}</p>}
                <input id="cPassword" type="password" placeholder="confirm password" {...register('cPassword', {
                    required: "this is a required", maxLength: {
                        value: 10,
                        message: "Max length is 10"
                    }
                })} /> <br />
                {errors.cPassword && <p>{errors.cPassword.message}</p>}
      <input type="submit" />
    </form>
    
        </div>
    );
};

export default NewRegister;