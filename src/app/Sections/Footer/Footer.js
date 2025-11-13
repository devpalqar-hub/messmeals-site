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
                <p className="logo">m</p>            
            </div>
            <div className='sec2'>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
            </div>
            <div className="sec3">
                <div className='downloadbadges'>
                <a  href="https://play.google.com/store/apps/details?id=com.messmeals.mess" target="_blank" rel="noopener noreferrer"><Image src="/play-store.png" alt="Google Play" width={130} height={44} /></a>
                <Image src="/app-store.png" alt="App Store" width={130} height={44} />
            </div>
            </div>
           </div>
           <div className="divider"></div>
           <div className="footerbottom">
                <p>Copyright ©2025 <span>mess meals</span></p>
                <ul>
                    <li>
                        <a href='/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>
                    </li>
                    <div> | </div>
                    <li>
                        <a href='/terms' target='_blank' rel='noopener noreferrer'>Terms and Conditions</a>
                    </li>
                </ul>
           </div>
    </footer>
  )
}

export default Footer