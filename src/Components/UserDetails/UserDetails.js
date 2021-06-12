import React from 'react';

const UserDetails = (props) => {

    const deleteProduct = (id) => {



        console.log(id)

        fetch(`https://polar-meadow-65365.herokuapp.com/delete/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('successfully deleted')
                }

            })


    }




    const { uName, email, address, _id } = props.user
    return (
        <tr >

            <th scope="row">.</th>
            <td>{uName}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td><svg onClick={() => deleteProduct(_id)} style={{ width: '30px', color: "red" }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg></td>

        </tr>
    );
};

export default UserDetails;