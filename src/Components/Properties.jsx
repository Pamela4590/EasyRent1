import React from "react";
import '../styles/Properties.css'
import firsthouse from '../assets/firsthouse.jpg'
import second from '../assets/second.jpg'
import third from '../assets/third.jpg'
import fourth from '../assets/fourth.jpg'
import fifth from '../assets/fifth.jpg'
import sixth from '../assets/sixth.jpg'
const detail = [
    {
      id: 1,
      type: "BUY",
      image: firsthouse, 
      address: "17081 Gahanga Street",
      location: "Gatsyata",
      price: "$850,000",
    },
    {
      id: 2,
      type: "BUY",
      image: second,
      address: "52591 kimihurura street",
      location: "nyarugenge",
      price: "$580,000",
    },
    {
      id: 3,
      type: "BUY",
      image: third,
      address: "33234 Remera street",
      location: "remera",
      price: "$1,500",
    },
    {
        id: 1,
        type: "RENT",
        image: fourth, 
        address: "17081 Gahanga Street",
        location: "Gatsyata",
        price: "$850,000",
      },
      {
        id: 2,
        type: "RENT",
        image: fifth,
        address: "17081 Gahanga Street",
        location: "kicukiro",
        price: "$580,000",
      },
      {
        id: 3,
        type: "RENT",
        image: sixth,
        address: "52591 Gasogi street",
        location: "nyarugenge",
        price: "$1,500",
      },
  ];
  
const Properties = () =>{
return (
    <div>
        <div className="details-container">
      <h2 className="details-title">Our Exclusive Properties</h2>
      <h3 className="details-subtitle">All Properties</h3>
      <div className="detail-list">
        {detail.map((detail) => (
          <div className="detail-card" key={detail.id}>
            <img src={detail.image} alt={detail.address} className="detail-image" />
            <span className={`tag ${detail.type.toLowerCase()}`}>{detail.type}</span>
            <div className="detail-details">
              <h4 className="detail-address">{detail.address}</h4>
              <p className="detail-location">{detail.location}</p>
              <p className="detail-price">{detail.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
)

}




export default Properties