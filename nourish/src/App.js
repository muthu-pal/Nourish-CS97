
import React from "react";
import { useQuery } from '@apollo/react-hooks'; 
import gql from 'graphql-tag'; 

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
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  console.log(data); 


  return (
    <div className="App">
        <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home dataFromDB={data} />
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

const FETCH_POSTS_QUERY = gql`
{
  getPosts{
    id 
    body
    title
    likes{
      username
    }
    
    comments{
      id 
      username 
      createdAt 
      body
    }
  }
}
`;

export default App;
