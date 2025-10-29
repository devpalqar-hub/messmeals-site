import React from 'react'
import { FaFacebookF,FaInstagram,FaGooglePlay} from "react-icons/fa";
import { FaXTwitter ,FaApple } from "react-icons/fa6";
import  './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footertop'>
            <div className='sec1'>
                <p className="logo">MESS MEALS</p>            
            </div>
            <div className='sec2'>
                <ul>
                    
                    <li>About</li>
                    <li>Features</li>
                    <li>Plans</li>
                    <li>Contact</li>

                </ul>
            </div>
            <div className='downloadicons'>
                <button className="downbox"><FaApple   className='roticon'/></button>
                <button className="downbox"><FaGooglePlay className='roticon'/></button>
            </div>
           </div>
           <div className="divider"></div>
           <div className="footerbottom">
                <p>Copyright ©2025 <span>MESS MEALS</span></p>
                <ul>
                    <li>Privacy Policy</li>
                    <li> | </li>
                    <li>Terms of Service</li>
                </ul>
           </div>
    </footer>
  )
}

export default Footer