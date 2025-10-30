import React from 'react'
import { FaFacebookF,FaInstagram,FaGooglePlay} from "react-icons/fa";
import { FaXTwitter ,FaApple } from "react-icons/fa6";
import  './Footer.css'
import Image from 'next/image';


const Footer = () => {
  return (
    <footer>
        <div className='footertop'>
            <div className='sec1'>
                <p className="logo">MESS MEALS</p>            
            </div>
            <div className='sec2'>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#plans">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
            </div>
            <div className='downloadbadges'>
                <Image src="/play-store.png" alt="Google Play" width={130} height={44} />
                <Image src="/app-store.png" alt="App Store" width={130} height={44} />
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