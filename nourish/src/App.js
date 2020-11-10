
import React from "react";
import './App.css';
import {
      BrowserRouter as Router,
      Switch,
      Route
    } from "react-router-dom";
import Home from './Home';
import Upload from './Upload';
import Search from './Search';

function App() {
  return (
    <div className="App">
        <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
