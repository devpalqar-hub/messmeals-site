import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaGooglePlay   } from "react-icons/fa";
import  './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footermain'>
            <div className='sec1'>
                <p className="appname">messmeals</p>
                <p className='appdetail'>Complete meal delivery ecosystem for mess <br />owners,delivery personnel, and customers.</p>
                
                    <div className='socialicons'>
                        <button className="sibox"><FaFacebookF className='socialicon'/></button>
                        <button className="sibox"><FaInstagram className='socialicon'/></button>
                        <button className="sibox"><FaTwitter className='socialicon'/></button>
                        <button className="sibox"><FaGooglePlay className='socialicon'/></button>
                    </div>
            </div>
            <div className='sec2'>
                <h2 className='heading'>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Plans</li>
                    <li>Contact</li>
                </ul>
            </div>
           </div>
    </footer>
  )
}

export default Footer