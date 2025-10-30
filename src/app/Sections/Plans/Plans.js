"use client";
import React from 'react'
import './Plans.css'
import Lottie from "lottie-react";
import planani from "../../../animations/joinnow.json";


export default function Plans() {



  return (
    <div className='planssection'id="plans">
           
             <div className="planbox">
                <div className='planname'><span>FREE</span> trail !</div>
                    <p className='plandetail'>Join our free trail <br />For limited 15 users only</p>
                    <div className="lottiebox">
                      <Lottie animationData={planani} 
                      loop
                      autoplay/>
                    </div>
                    <button>Contact now</button>
            </div>  
          
    </div>
  )
}