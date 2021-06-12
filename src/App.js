import React, { createContext, useState } from 'react';
import './App.css';
import Screen1 from './Components/Screen1/Screen1'
import Login from './Components/Login/Login';
import Screen2 from './Components/Screen2/Screen2'
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/screen2">
          <Screen2></Screen2>
          </PrivateRoute>
          <PrivateRoute exact path="/">
           <Screen2></Screen2>
          </PrivateRoute>
          
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
