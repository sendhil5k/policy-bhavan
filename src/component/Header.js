import React from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="site-header">
  <div className="site-identity">
    <h1><a href="#">Log</a></h1>
  </div>  
  <nav className="site-navigation">
    <ul className="nav">
      <li><a href="#">About</a></li> 
      <li><a href="#">News</a></li> 
      <li><a href="#">Contact</a></li> 
    </ul>
  </nav>
</header>
  )
}
export default Header;
