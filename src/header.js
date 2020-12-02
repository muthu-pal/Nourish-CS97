import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { AuthContext } from "./context/auth";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const menuBar = user ? (
    <div className="container">
      <Link to="/">
        <div className="titles">
          <h1 className="title">nourish</h1>
          <h1 className="subtitle">for Westwood</h1>
        </div>
      </Link>
      <div className="buttons">
        <Link to="/search">
          <button className="search" onClick>
            SEARCH
          </button>
        </Link>
        <Link to="/upload">
          <button className="upload" onClick>
            UPLOAD
          </button>
        </Link>
        <button className="search" onClick={logout}>
          LOGOUT
        </button>
      </div>
    </div>
  ) : (
    <div className="container">
      <Link to="/">
        <div className="titles">
          <h1 className="title">nourish</h1>
          <h1 className="subtitle">for Westwood</h1>
        </div>
      </Link>
      <div className="buttons">
        <Link to="/search">
          <button className="search" onClick>
            SEARCH
          </button>
        </Link>
        <Link to="/register">
          <button className="upload" onClick>
            REGISTER
          </button>
        </Link>
        <Link to="/login">
          <button className="search" onClick>
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );

  return menuBar;
}

export default Header;
