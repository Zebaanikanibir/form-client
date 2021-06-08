import React from 'react';

const UserDetails = (props) => {
    const{uName, email, fName, lName} = props.user
    return (
        <div className="App mt-5">
            <p>First Name: {fName}</p>
            <p>Last Name: {lName}</p>
            <p>User Name: {uName}</p>
            <p>Email: {email}</p>
            
        </div>
    );
};

export default UserDetails;