import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import Home from "./Home";
import Upload from "./Upload";
import Search from "./Search";
import Register from "./Register";
import Login from "./Login";

function App() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home dataFromDB={data} />}
              ></Route>
              <Route
                path="/search"
                render={() => <Search dataFromDB={data} />}
              ></Route>
              <Route path="/upload" component={Upload}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/login" component={Login}></Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      username
      id
      title
      caption
      tags
      likes {
        username
      }

      comments {
        id
        username
        createdAt
        body
      }
      imageName
    }
  }
`;

export default App;
