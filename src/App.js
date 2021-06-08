import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import GoogleSign from './Components/GoogleSign/GoogleSign';
import Login from './Components/Login/Login';
import Users from './Components/Users/Users';
import PrivateRoute from './Components/Login/PrivateRoute';
import Register from './Components/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/google">
            <GoogleSign></GoogleSign>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/user">
          <Users></Users>
          </PrivateRoute>
          
          <Route exact path="/">
           <Home></Home>
          </Route>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
