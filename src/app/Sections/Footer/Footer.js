import React from 'react'
import { FaFacebookF,FaInstagram,FaGooglePlay   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import  './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footertop'>
            <div className='sec1'>
                <p className="appname">MESS MEALS</p>            
            </div>
            <div className='sec2'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Plans</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='socialicons'>
                <button className="sibox"><FaFacebookF className='roticon'/></button>
                <button className="sibox"><FaInstagram className='roticon'/></button>
                <button className="sibox"><FaXTwitter  className='roticon'/></button>
                <button className="sibox"><FaGooglePlay className='roticon'/></button>
            </div>
           </div>
           <div className="footerbottom">
                <div className="divider"></div>
                <p>Copyright ©2021 Seven spices</p>
           </div>
    </footer>
  )
}

export default Footer