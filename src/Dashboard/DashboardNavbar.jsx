import React from "react";
import "./Dashboardstyles/DashboardNavbar.css";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <nav className="navb">
      <h1 className="navb-title">Easy Rent Dashboard</h1>
      <ul className="navb-menu">
        <li className="navb-item">Profile</li>
        <li className="navb-item"><Link to='/'> Logout</Link></li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;