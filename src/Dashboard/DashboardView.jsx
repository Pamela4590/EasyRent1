import React, { useState } from 'react';
import "./Dashboardstyles/DashboardView.css"; 
// Ensure you have the necessary styles for the dashboard
import Charts from './Charts.jsx';

const DashboardView = ({ isDarkMode }) => {
  const dashboardItems = [
    { id: 1, title: "Rent", value: "$15,000" },
    { id: 2, title: "Buy", value: "$75,000" },
    { id: 3, title: "Requests", value: "$85,000" },
  ];

  return (
    <div className={`dashboard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <br /><center><br /><br /><br />
        <h2 style={{ color: isDarkMode ? 'white' : 'lightviolet' }}>Dashboard Overview</h2>
        <p style={{ color: isDarkMode ? 'lightgray' : 'black' }}></p>

        <div className="board-container">
          {dashboardItems.map((item) => (
            <div key={item.id} className="board-item">
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </center><br />
      <center><Charts /></center>
    </div>
  );
};

export default DashboardView;
