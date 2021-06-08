import React from 'react';
import Users from '../Users/Users';
import image from '../../images/girl-hi-sticker-for-messenger-label-icon-colorful-vector-15534195.jpg';
import {
   
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <div className="App mt-5">
           
            <Users></Users>
            <Link to="/register">Register First</Link> <br />
            <img style={{width: "200px"}} src={image} alt="" />
            
        </div>
    );
};

export default Home;