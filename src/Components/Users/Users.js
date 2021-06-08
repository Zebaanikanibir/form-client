import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UserDetails from '../UserDetails/UserDetails';

const Users = () => {
    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:5000/users?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setUsers(data))



    },[])
    console.log('user',users)
    return (
        <div>
            {
        users.map(user =><UserDetails user={user}></UserDetails>)
            }
        </div>
    );
};

export default Users;