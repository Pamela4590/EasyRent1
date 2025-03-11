import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/lg.png"
import { Link,useNavigate } from "react-router-dom";
import Login from "../Components/Login"

function Navbar() {
    const handleLogin =() =>{
        navigate('/Login');
    }
    const navigate =useNavigate();
    return (
        <>
            <div className="navbar">
             
                    <div className="navbar-left">
                       <img src={logo} alt="logo" className="logo-nav" />
                    </div>
                  
                    <div className="details-navbar">
                    <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Properties">Properties</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                            
                        </ul>
                    </div>
                <div><button onClick={handleLogin} className="button-log">LOGIN</button></div>
            </div>

        </>
    )

}
export default Navbar
