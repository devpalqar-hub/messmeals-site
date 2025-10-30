"use client";

import React from 'react'
import './Contact.css'
import Image from 'next/image';
import Lottie from "lottie-react";
import contactani from "../../../animations/contact us.json";

import { FaFacebookF,FaInstagram,FaLinkedinIn ,FaWhatsapp } from "react-icons/fa";
import { FaXTwitter,FaPhone } from "react-icons/fa6";
import { HiOutlineMail,HiOutlinePhone  } from "react-icons/hi";

export default function Contact() {
  return (
    <div className='contact' id="contact">
        <div className="contactmain">
          <div className="contactleftsection">
           <div className="contactdetailsection">
             <h3>Get In Touch With Us!</h3>
          <div className="contactbox">
            <HiOutlineMail className='contacticon'/>
            <div>
              <h4>Email Us</h4>
              <p>messmeals@gmail.com</p>
            </div>
        </div>
         <div className="contactbox">
          <HiOutlinePhone  className='contacticon'/>
           <div>
            <h4>Call Us</h4>
           <p>+91 9876543210</p>
           </div>
         </div>
         <div className="contactbox">
          <FaWhatsapp className='contacticon'/>
           <h4>Chat with Us</h4>
         </div>
         
           </div>
          <div className="contactimgsection">
            <Lottie animationData={contactani} />
          </div>
          
        </div>
          <div className="contactrightsection"> 
            <form className="inquiryform">
              <h3>Send Us a Message</h3> 
              <input placeholder="Name" type="text" />                      
              <input placeholder="Email" type="email" />        
              <input placeholder="Phone" type="tel" />         
              <textarea placeholder="Message" type="text" rows="5"/>            
              <button type="submit">Send Message </button>
            </form>
          </div>
        </div>
    </div>
  )
}
