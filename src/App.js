import React, { useState, useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Login from "./Components/Login/index";
import Menu from "./Components/LateralPanel/lateralPanel";
import Dashboard from "./pages/Dashboard";
import { firebaseAuth } from "./provider/AuthProvider"


function App() {
  // Firebase
  const {token} = useContext(firebaseAuth);
  console.log(token);
  const content = {
    marginLeft: "64px",
    padding: "15px 20px 0"
  };
  return (
    <Router>
      <Switch>
          <Route exact path="/" render={rProps => token === null ? <Login/> : <><Dashboard/> <Menu/> </>}/>
          {/* <Route exact='/dashboard' render={rProps => token === null ? <Login/> : }/> */}
      </Switch>
    </Router>
  );
}

export default App;
