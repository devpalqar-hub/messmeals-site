import React from 'react'
import './Analytics.css'
import { HiCurrencyRupee } from "react-icons/hi2";
import { MdGroups ,MdOutlineInsights,MdBarChart   } from "react-icons/md";

export default function Analytics() {
  return (
    <div className='Analyticssection'>  
    <div className='Analyticstitle'>Get Insights That Drive Growth</div>     
         <div className="analyticslefttsection">    
           <p className='analyticdetail'>Visualize meal type trends,Customer Pattern,and Delivery performance in real time.Make informed decisions,reduce errors,and optimize you mess operation effortlessly</p>
           <ul>
            <li><HiCurrencyRupee className='analyticicon'/>Payment & Revenue Reports</li>
            <li><MdBarChart  className='analyticicon'/>Daily Meal Tracking & Trends</li>
            <li><MdOutlineInsights  className='analyticicon'/>Delivery Performance Insights</li>
            <li><MdGroups  className='analyticicon'/>Delivery Patners & Customers Analytics</li>
            
           </ul>

       </div>
    </div>
  )
}
