import React from "react";
import {Link} from 'react-router-dom';
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          © 2024 <a href="mailto:policy@yopmail.com">Policy com</a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
