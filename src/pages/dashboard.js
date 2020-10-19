import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import DashHeader from "./components/DashHeader";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Valid from "./pages/valid";

function App() {
  return (
    <>
      <DashHeader />
      <Switch>
        <Route path={routes.wall}>
          <h1>POSTS</h1>
        </Route>
        <Route path={routes.profile}>
          <h1>PROFILE</h1>
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