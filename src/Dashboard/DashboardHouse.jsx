import React from 'react';
import "./Dashboardstyles/DashboardHouse.css";
import firsthouse from "../assets/firsthouse.jpg";
import second from "../assets/second.jpg"
import third from "../assets/third.jpg"
import fourth from "../assets/fourth.jpg"
import fifth from "../assets/fifth.jpg"
import sixth from "../assets/sixth.jpg"
import house1 from "../assets/house1.jpg"
import house2 from "../assets/house2.jpg"
import house3 from "../assets/house3.jpg"

const DashboardHouse = () => {
    const houses = [
      { id: 1, title: "KIMIHURURA", image: firsthouse, price: "$120,000", location: "NYARUGENGE" },
      { id: 2, title: "Remera", image: second, price: "$450,000", location: "KICUKIRO" },
      { id: 3, title: "GAHANGA", image: third, price: "$95,000", location: "KICUKIRO" },
      { id: 4, title: "KINAMBA street", image: fourth, price: "$350,000", location: "GISOZI" },
  
      { id: 5, title: "KIMIHURURA", image: fifth, price: "$120,000", location: "NYARUGENGE" },
      { id: 6, title: "Remera", image: sixth, price: "$450,000", location: "KICUKIRO" },
      { id: 7, title: "GAHANGA", image: house1, price: "$95,000", location: "KICUKIRO" },
      { id: 8, title: "KINAMBA street", image: house3, price: "$350,000", location: "GISOZI" },
    ];

    return (
        <div className='dashboard'>
            <br /><br /><br /><br />
            <div className="board-container">
                {houses.map((house) => (
                    <div key={house.id} className="house-item">
                        {house.image && <img src={house.image} alt={house.title} className="house-image" />}  
                        <h3>{house.title}</h3>
                        <p><strong>Price:</strong> {house.price}</p>
                        <p><strong>Location:</strong> {house.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardHouse;
