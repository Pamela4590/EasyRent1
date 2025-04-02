import React from "react";
import logo from '../assets/lg.png';
import '../styles/Footer.css'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer(){
    return(
        <>
        <div className="footer">
            <div className="datas-goods">
            <div className="footer-side">
               <img src={logo} alt="" />
               <p>2050 by ApartmentRental.Powered and secured by R&G</p>
            </div>
            <div className="footer-left">
                <ul> 
                <li><a href="/">Home</a></li>
                <li><a href="/Properties">Properties</a></li> 
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Payment">Payment</a></li>
                </ul>
                <div className="street-path">
                 <ul>
                  <li>500 Kacyiru Street</li>
                  <li>Gasabo, KRW 184</li>
                   <li>pamela75@gmail.com</li>   
                  </ul> 
                  <div className="icons-used">
                  
                  
                  <FaFacebook  className=""/>
                  <RiTwitterXLine />
                  <FaInstagramSquare />
                  <FaYoutubeSquare />
                  <FaLinkedin />
                  
                      
                  
                  </div>
                </div>
            </div>
            </div>
        </div>

        </>
    )
    
}
export default Footer