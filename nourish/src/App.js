
import React from "react";
import './App.css';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";
import Home from './Home';
import Upload from './Upload';
import Search from './Search';

function App() {
  return (
    <div className="App">
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">search</Link>
          </li>
          <li>
            <Link to="/upload">upload</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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

// function Home() {
//       return (
//         <div>
//           <h2>Home</h2>
//         </div>
//       );
//     }
    
//     function Search() {
//       return (
//         <div>
//           <h2>Search</h2>
//         </div>
//       );
//     }
    
//     function Upload() {
//       return (
//         <div>
//           <h2>Upload</h2>
//         </div>
//       );
//     }


export default App;
