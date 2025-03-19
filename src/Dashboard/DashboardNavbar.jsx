import React from "react";
import "./Dashboardstyles/DashboardNavbar.css";

const DashboardNavbar = () => {
  return (
    <nav className="navb">
      <h1 className="navb-title">Easy Rent Dashboard</h1>
      <ul className="navb-menu">
        <li className="navb-item">Profile</li>
        <li className="navb-item">Logout</li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;