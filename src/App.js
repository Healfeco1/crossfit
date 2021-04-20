import {BrowserRouter as Router,
        Switch,
        Route,
        Link
  } from "react-router-dom";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Login from "./Components/Login/index";
import LateralPanel from "./Components/LateralPanel/lateralPanel";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resetpassword">ResetPassword</Link></li>
            <li><Link to="/atletas">Atletas</Link></li>
            <li><Link to="/lateralPanel">Menu</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/resetpassword">
            <ResetPassword/>
          </Route>
          <Route path="/atletas">
            <Login/>
          </Route>
          <Route path="/lateralPanel">
            <LateralPanel/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
  return <h2>Home</h2>
}
function About(){
  return <h2>About</h2>
}
function Users(){
  return <h2>Users</h2>
}

export default App;
