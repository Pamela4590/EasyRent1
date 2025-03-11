import React from "react";
import "./Dashboardstyles/DashboardNavbar.css";

const DashboardNavbar = () => {
  return (
    <nav className="navba">
      <h1 className="navba-title">Easy Rent Dashboard</h1>
      <ul className="navba-menu">
        <li className="navba-item">Profile</li>
        <li className="navba-item">Logout</li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;