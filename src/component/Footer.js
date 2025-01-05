import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <ul>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
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
