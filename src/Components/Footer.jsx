import React from "react";
import logo from '../assets/logo_rent-removebg-preview.png';
import '../styles/Footer.css'
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
               <p>2035 by ApartmentRental.Powered and secured by R&G</p>
            </div>
            <div className="footer-left">
                <ul> 
                <li>Home</li>
                <li>Properties</li> 
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
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