import React from "react";
import '../styles/Home.css'
import firsthouse from "../assets/firsthouse.jpg"
import second from "../assets/second.jpg"
import third from "../assets/third.jpg"
const properties = [
    {
      id: 1,
      image: firsthouse, // Replace with actual image path
      label: "BUY",
      address: "17081 Perry Street",
      location: "San Francisco, CA, USA",
      price: "$850,000",
      beds: 4,
      baths: 2,
      levels: 3,
      sqft: 1234,
    },
    {
      id: 2,
      image: second, // Replace with actual image path
      label: "BUY",
      address: "52591 Union Boulevard",
      location: "San Francisco, CA, USA",
      price: "$580,000",
      beds: 4,
      baths: 2,
      levels: 3,
      sqft: 1234,
    },
    {
      id: 3,
      image: third, // Replace with actual image path
      label: "BUY",
      address: "33234 Washington Avenue",
      location: "San Francisco, CA, USA",
      price: "$770,000",
      beds: 4,
      baths: 2,
      levels: 2,
      sqft: 1234,
    },
  ];
const Home = () => {
    return (
        <div>
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="content">
        <h1>New Properties</h1>
        <p>EXCLUSIVELY BY R$G</p>
        <button className="explore-btn">Explore</button>
      </div>
    </div>
    <div className="buy-rent-container">
      <h3 className="section-title">WHAT ARE YOU LOOKING FOR?</h3>
      <div className="options">
        <div className="option buy">
          <div className="overlay"></div>
          <h2>Buy</h2>
        </div>
        <div className="option rent">
          <div className="overlay"></div>
          <h2>Rent</h2>
        </div>
      </div>
    </div>
    <div className="property-list-container">
      <h3 className="property-section-title">NEW PROPERTIES</h3>
      <h2 className="property-main-title">For Sale</h2>
      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div
              className="property-image"
              style={{ backgroundImage: `url(${property.image})` }}
            >
              <span className="property-label">{property.label}</span>
            </div>
            <div className="property-info">
              <h3 className="property-address">{property.address}</h3>
              <p className="property-location">{property.location}</p>
              <p className="property-price">{property.price}</p>
              <div className="property-details">
                <div className="detail">
                  <span className="detail-label">Beds</span>
                  <span className="detail-value">{property.beds}</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Baths</span>
                  <span className="detail-value">{property.baths}</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Levels</span>
                  <span className="detail-value">{property.levels}</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Sqft</span>
                  <span className="detail-value">{property.sqft}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  


    
        </div>
        
    );
};

export default Home;