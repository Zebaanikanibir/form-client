import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UserDetails from '../UserDetails/UserDetails';

const Users = () => {
    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://polar-meadow-65365.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))



    }, [])
    console.log('user', users)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                
                {
                    users.map(user => <UserDetails user={user} key={user._id}></UserDetails>)
                }
                
                </tbody>
              
            </table>

        </div>
    );
};

export default Users;