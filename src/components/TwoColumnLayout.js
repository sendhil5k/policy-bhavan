import React from "react";
import "./TwoColumnLayout.css"; // Import the CSS file
import MainLayout from "./MainLayout";
const TwoColumnLayout = () => {
  

  return (
    <div className="mid-container">
      <div className="wrapper">
        <div className="column">
          <h4>Contacts</h4>
          <h4>Recent</h4>
          <h4>Admin</h4>
        </div>
        <div className="column1">
          <MainLayout />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
