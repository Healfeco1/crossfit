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
import { ToastProvider } from 'react-toast-notifications'


function App() {
  // Firebase
  const { token } = useContext(firebaseAuth);
  return (
      <Router>
        <Switch>
          <Route exact path="/" render={rProps => token === null ? <ToastProvider><Login/></ToastProvider> : <><Dashboard/> <Menu/> </>}/>
        </Switch>
      </Router>

  );
}

export default App;
