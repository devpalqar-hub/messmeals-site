import React from 'react'
import './Plans.css'
import { FiCoffee,FiMoon  } from "react-icons/fi";
import { PiForkKnifeBold } from "react-icons/pi";
import { BiCustomize } from "react-icons/bi";

export default function Plans() {
  return (
    <div className='planssection' id='pricing'>

        <h2>Plans & Pricing</h2>
        <div className="planalign">
            <div className="plancontainer">
            <div className="planbox">
                <div className='planname'>Basic Plan</div>
                <div className="plancontent">
                    <p className='planprice'><span>₹3000</span>/month</p>
                <p className='plandetail'>Standard meals with basic menu</p>
                <div className="meallist">
                    <p className="meals"><FiCoffee/>Breakfast</p>
                    <p className="meals"><FiMoon/>Dinner</p>
                </div>
                </div>
            </div>
            <div className="planbox">
                <div className='planname'>Standard Plan</div>
                <div className="plancontent">
                    <p className='planprice'><span>₹4000</span>/month</p>
                <p className='plandetail'>Standard meals </p>
                <div className="meallist">
                    <p className="meals"><FiCoffee/>Breakfast</p>
                    <p className="meals"><PiForkKnifeBold/>Lunch</p>
                    <p className="meals"><FiMoon/>Dinner</p>
                </div>
                </div>
            </div>
            <div className="planbox">
                <div className='planname'>Premium Plan</div>
                <div className="plancontent">
                    <p className='planprice'><span>₹5000</span>/month</p>
                <p className='plandetail'>Premium meals with extended menu</p>
                <div className="meallist">
                    <p className="meals"><FiCoffee/>Breakfast</p>
                    <p className="meals"><PiForkKnifeBold/>Lunch</p>
                    <p className="meals"><FiMoon/>Dinner</p>
                </div>
                </div>
            </div>
            
        </div>
        <div className="custombox">
            <BiCustomize/>
            <div className="customprice">
                <p className='cptitle'>Need Custom Pricing?</p>
            <p className='cpdetail'>You can create and customize your own meal plans and pricing in the <span>MESS MEALS</span> app</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}
