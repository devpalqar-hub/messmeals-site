import React from 'react'
import "./About.css"
import Image from 'next/image';
import { FaMapPin, FaChartLine, FaBowlFood} from 'react-icons/fa6';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-headline">
        <span className="about-subhead">MESS MEALS</span>
        <h2>Why Are We Unique ?</h2>
      </div>
      <div className="about-features-row">
        <div className="about-feature">
          <FaBowlFood className='icon'/>
          <h3>Smart Meal Plans</h3>
          <p>Flexible, personalized meal plans make ordering easy for every mess member.</p>
        </div>
        <div className="about-feature">
          <FaChartLine className="icon"/>
          <h3>Real-Time Order Tracking</h3>
          <p>Track orders, deliveries, and feedback with clear, instant updates on your dashboard.</p>
        </div>
        <div className="about-feature">
          <FaMapPin className='icon' id='icons'/>
          <h3>Easy Management</h3>
          <p>Mess owners and delivery staff manage everything—analytics, payments, and service—all in one place.</p>
        </div>
      </div>
      <div className="about-bottom-row">
        <div className="about-bottom-left">
          <h2>The Innovative Way to Mess Management</h2>
          <p>
            Join Mess Meals for a refreshed experience managing meal orders, deliveries, and customer satisfaction.
          </p>
          <div className="app-badges">
            <Image src="/play-store.png" alt="Google Play" width={130} height={44} />
            <Image src="/app-store.png" alt="App Store" width={130} height={44} />
          </div>
        </div>
        <div className="about-bottom-right">
          <Image src="/aboutPic.png" alt="App Screenshot" width={225} height={340} className="about-app-img" />
        </div>
      </div>
    </section>
  );
}

