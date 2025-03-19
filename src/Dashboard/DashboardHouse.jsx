import React from 'react'
import "./Dashboardstyles/DashboardHouse.css"
const DashboardHouse = () => {
    const dashboardItems = [
        { id: 1, title: "Rent", value: "$15,000" },
        { id: 2, title: "Buy", value: "$75,000" },
        { id: 3, title: "Requests", value: "$85,000" },
      ];
  return (
    <div className='dashboard'><br /><br /><br /><br />
       <div className="board-container">
          {dashboardItems.map((item) => (
            <div key={item.id} className="board-item">
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

    </div>
  )
}

export default DashboardHouse