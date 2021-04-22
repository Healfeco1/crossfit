import React, {useState} from 'react'
import {BrowserRouter as Router,
        Switch,
        Route,
        Link
  } from "react-router-dom";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Login from "./Components/Login/index";
import Menu from "./Components/LateralPanel/lateralPanel";
function App() {
  const [token, setToken] = useState()

  if(token=="true"){
    return <Login setToken={setToken}/>
  }
  return (
    <Router>
        <Menu/>
        <Switch>
          <Route path="/resetpassword">
            <ResetPassword/>
          </Route>
          <Route path="/atletas">
            <Login/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
