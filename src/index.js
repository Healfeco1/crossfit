import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Components/LateralPanel/lateralPanel'
import App from './App';
import Login from './Components/Login/index';
import AuthProvider from './provider/AuthProvider'
import Dashboard from './pages/Dashboard'

ReactDOM.render(
  <Router>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </Router>
  ,
  document.getElementById('root')
);
