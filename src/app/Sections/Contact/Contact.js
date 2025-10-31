"use client";

import React from 'react'
import './Contact.css'
import Lottie from "lottie-react";
import contactani from "../../../animations/contact us.json";
import { FaFacebookF,FaInstagram,FaLinkedinIn ,FaWhatsapp } from "react-icons/fa";
import { FaXTwitter,FaPhone } from "react-icons/fa6";
import { HiOutlineMail,HiOutlinePhone  } from "react-icons/hi";
import { useState } from 'react';

export default function Contact() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[message,setMessage]=useState("");

  const handleSubmit =async (e)=> {
    e.preventDefault();
    console.log("Form submitted");
  
    const API_URL="http://145.223.19.248/supermeals/contact-form";
  try{
    const response = await fetch(API_URL,{
      method: 'POST',
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
          Name:name,
          phone_number:phone,
          email:email,
          message:message,
        }),
    });
    if (response.ok){
      alert("Message sent successfully");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    }
    else{
      alert("Something went wrong")    
    }
  }
  catch(error){
    console.error("Error",error);
    alert("Error sending message");
  }
  };



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
              <a href="mailto:messmeals@gmail.com" target="_blank" rel="noopener noreferrer">
                <p>messmeals@gmail.com</p>
              </a>
              
            </div>
        </div>
         <div className="contactbox">
          <HiOutlinePhone  className='contacticon'/>
           <div>
            <h4>Call Us</h4>
            <a href="tel:+919876543210"><p>+91 9876543210</p></a>
           </div>
         </div>
         <div className="contactbox">
          <FaWhatsapp className='contacticon'/>
           <a  href="https://wa.me/919895672770?text=Hello%20I%20want%20to%20know%20more" target="_blank" rel="noopener noreferrer">
           <h4>Chat with Us</h4>
           </a>
         </div>       
           </div>
          <div className="contactimgsection">
            <img src="./Contactimg.png" alt="" />
          </div>
          
        </div>
          <div className="contactrightsection"> 
            <form onSubmit={handleSubmit} className="inquiryform">
              <h3>Send Us a Message</h3> 
              <input 
                placeholder="Name" 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />                      
              <input 
                placeholder="Email" 
                type="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />        
              <input 
                placeholder="Phone" 
                type="tel" 
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
              />         
              <textarea 
                placeholder="Message" 
                type="text" 
                rows="5"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              />            
              <button type="submit">Send Message </button>
            </form>
          </div>
        </div>
    </div>
  )
}
