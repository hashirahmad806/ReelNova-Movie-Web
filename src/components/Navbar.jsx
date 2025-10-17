import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">ReelNova</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/favorites">Favorite</a></li>
          
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <button className="nav-btn"><a href="/login">login Now </a></button>
      </div>
    </nav>
  );
}

export default Navbar;
