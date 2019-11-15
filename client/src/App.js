import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import PrivateRoute from './components/Organisms/PrivateRoute'

function App() {



  return (
    <Router>
      <div className="App">
        <header className="App-header">
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to='/bubblelist'>Friends</Link>
                </li>
              </ul>

              <Switch>
              <PrivateRoute path="/bubblelist">
                <FriendsList/>
              </PrivateRoute>
                <Route path="/login" component={Login}/>
                <Route component={Login}/>
              </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
