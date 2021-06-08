import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UserDetails from '../UserDetails/UserDetails';

const Users = () => {
    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('https://polar-meadow-65365.herokuapp.com/users?email='+loggedInUser.email)
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