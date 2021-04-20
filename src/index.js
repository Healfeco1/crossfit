import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Components/LateralPanel/lateralPanel'
import App from './App';
import Login from './Components/Login/index';

ReactDOM.render(
  <React.StrictMode>
    {/* <Login /> */}
    {/* <App/> */}
    <Menu/>
  </React.StrictMode>,
  document.getElementById('root')
);
