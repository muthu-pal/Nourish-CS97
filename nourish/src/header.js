import React from 'react';
import './header.css'

function Header() {
    return (
      <div className="container">
        <a href="/">
          <h1 className="title">nourish</h1>
        </a>
        <div className="buttons">
        <a href="/search">
          <button className="search" onClick>SEARCH</button>
        </a>
        <a href="/upload">
          <button className="upload" onClick>UPLOAD</button>
        </a>
        <a href="/register">
          <button className="search" onClick>REGISTER</button>
        </a>
        <a href="/login">
          <button className="upload" onClick>LOGIN</button>
        </a>
        </div>
      </div>
    )
  }
  
  export default Header
