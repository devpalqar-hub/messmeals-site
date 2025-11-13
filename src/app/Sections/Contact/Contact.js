"use client";

import React from 'react'
import './Contact.css'
import Lottie from "lottie-react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail,HiOutlinePhone  } from "react-icons/hi";
import { useState } from 'react';

export default function Contact() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[message,setMessage]=useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const handleSubmit =async (e)=> {
    e.preventDefault();
    console.log("Form submitted");
  
    const API_URL="http://31.97.237.63/supermeals/contact-form";
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
      setAlertType("success");
      setAlertMessage("Message sent successfully");
      setShowAlert(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        setTimeout(() => setShowAlert(false),1200 );
    }
    else{
      setAlertType("error");
      setAlertMessage("Something went wrong");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false),1200 );

    }
  }
  catch(error){
    setAlertType("error");
    console.error("Error",error);
    setAlertMessage("Error sending message");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false),1200 );
  }
  };


  return (
    <div className='contact' id="contact">
      {showAlert && (
        <div className="alertOverlay">
          <div className={`alertBox ${alertType}`}>
            <div className="alertContent">
              {alertType === "success" ? (
                <span className="alertIcon successIcon">✔</span>
              ) : (
                <span className="alertIcon errorIcon">✖</span>
              )}
              <p className="alertText">{alertMessage}</p>
            </div>
          </div>
        </div>
      )}

        <div className="contactmain">
          <div className="contactleftsection">
           <div className="contactdetailsection">
             <h3>Get In Touch With Us!</h3>
          <div className="contactbox">
            <HiOutlineMail className='contacticon'/>
            <div>
              <h4>Email Us</h4>
              <a href="mailto:info@messmeals.com"  rel="noopener noreferrer">
                <p>info@messmeals.com</p>
              </a>
              
            </div>
        </div>
         <div className="contactbox">
          <HiOutlinePhone  className='contacticon'/>
           <div>
            <h4>Call Us</h4>
            <a href="tel:+919995498218" rel="noopener noreferrer"><p>+91 9995498218</p></a>
           </div>
         </div>
         <div className="contactbox">
          <FaWhatsapp className='contacticon'/>
           <a  href="https://wa.me/919995498218" target="_blank" rel="noopener noreferrer">
           <h4>Chat with Us</h4>
           </a>
         </div>       
           </div>
          <div className="contactimgsection">
            <img src="./Contactimg.png" alt="Contact" />
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
                required
              />        
              <input 
                placeholder="Phone" 
                type="tel" 
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                required
              />         
              <textarea 
                placeholder="Message" 
                type="text" 
                rows="5"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                required
              />            
              <button type="submit">Send Message </button>
            </form>
          </div>
        </div>
    </div>
  )
}
