import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
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
                  <Link to='/bubblepage'>BubblePage</Link>
                </li>
              </ul>

              <Switch>
              <PrivateRoute path="/bubblepage">
                <BubblePage/>
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
