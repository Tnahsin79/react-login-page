import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Header from "./components/Header";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Valid from "./pages/valid";
import Dashboard from "./pages/dashboard"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={routes.signup}>
          <Signup />
        </Route>
        <Route path={routes.login}>
          <Login />
        </Route>
        <Route path={routes.valid}>
          <Valid />
        </Route>
        <Route path={routes.dashboard}>
          <Dashboard />
        </Route>
        <Route path={routes.home}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>WELCOME TO HOME PAGE</h1>
          </header>
        </Route>
      </Switch>
    </>
  );
}

export default App;
/*
<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
*/