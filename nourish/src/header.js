import React from 'react';
import './header.css'

function Header() {
    return (
      <div className="container">
        <h1 className="title">nourish</h1>
        <div className="buttons">
        <button className="search">SEARCH</button>
        <button className="upload">UPLOAD</button>
        </div>
      </div>
    )
  }
  
  export default Header
