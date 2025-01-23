import React from "react";
import "./Header.css"; // Import the CSS file
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
       <div className="notification-top-bar">
        <p>
          You Insurance policy get expired
          <small>
             <a href="https://www.google.com">Buy Policy</a>
          </small>
        </p>
      </div>
      <nav className="site-header">
      <a href="#" className="navbar-brand">Policy <span className="text-danger">Bhavan</span></a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item">
           <Link to="/about">About</Link>
          </li>

          <li className="nav-item">
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      </nav>
    </header>
  )
}
export default Header;
