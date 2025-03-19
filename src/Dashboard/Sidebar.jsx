import React from "react";
import "./Dashboardstyles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Dashboard</h1>
      <ul className="sidebar-menu">
      <li><Link to="/Dashboard"> Dashboard View</Link></li>
      <li><Link to="/Customers"> Customers</Link></li>
      <li><Link to="/Orders"> Orders</Link></li>
        <li><Link to="/Houses"> Houses</Link></li>
        <li ><Link to="/Messages">Messages</Link></li>
        <li ><Link to="/settings">settings</Link></li>
        <li ><Link to="/help center">help center</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
