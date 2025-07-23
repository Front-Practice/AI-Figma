import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Artificial Intelligence
        </a>
        <div className="nav-menu">
          <a href="/home" className="nav-links">Home</a>
          <a href="/about" className="nav-links">About</a>
          <a href="/services" className="nav-links">Services</a>
          <a href="/blog" className="nav-links">Blog</a>
          <a href="/contact" className="nav-links">Contact</a>
        </div>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;