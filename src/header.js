import React, {useContext} from 'react';
import './header.css';
import { AuthContext } from './context/auth';

function Header() {
  const {user, logout} = useContext(AuthContext);
  const menuBar = user ? (
    <div className="container">
        <a href="/">
          <div className="titles">
            <h1 className="title">nourish</h1>
            <h1 className="subtitle">for Westwood</h1>
          </div>
        </a>
        <div className="buttons">
        <a href="/search">
          <button className="search" onClick>SEARCH</button>
        </a>
        <a href="/upload">
          <button className="upload" onClick>UPLOAD</button>
        </a>
          <button className="search" onClick={logout}>LOGOUT</button>
        </div>
      </div>
  ):(
    <div className="container">
        <a href="/">
          <div className="titles">
            <h1 className="title">nourish</h1>
            <h1 className="subtitle">for Westwood</h1>
          </div>
        </a>
        <div className="buttons">
        <a href="/search">
          <button className="search" onClick>SEARCH</button>
        </a>
        <a href="/register">
          <button className="upload" onClick>REGISTER</button>
        </a>
        <a href="/login">
          <button className="search" onClick>LOGIN</button>
        </a>
        </div>
      </div>
  )


    return menuBar;
  }
  
  export default Header
