import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo_rent-removebg-preview.png"
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <div className="navbar">
                {/* <div className="nav"> */}
                    <div className="navbar-left">
                       <img src={logo} alt="" />
                    </div>
                  
                    <div className="details-navbar">
                    <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Properties</li>
                            <li>About</li>
                            <li>Team</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                {/* </div> */}
            </div>

        </>
    )

}
export default Navbar
