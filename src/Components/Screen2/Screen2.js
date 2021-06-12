import React from 'react'
import Users from '../Users/Users'
import Register from '../Register/Register'
const Screen2 = () => {
  return (
    <div className="row">
      <div className="col-md-5">
     
      <Register></Register>
      </div>
     <div className="col-md-7">
       <h2>User Details</h2>
     <Users></Users>
     </div>
    </div>
  )
}

export default Screen2
