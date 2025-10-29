"use client";

import React, { useState } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import anim1 from "@/animations/food-delivery.json";
import anim2 from "@/animations/food.json";
import anim3 from "@/animations/ServeFood.json";

const animations = [anim3, anim2, anim1];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const handleComplete = () => {
    setIndex((prev) => (prev + 1) % animations.length);
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        {/* Left Section */}
        <div className="container-left">
          <h1 className="title">
            <span>MESS MEALS</span> Management App
          </h1>
          <p className="desc">
            Efficient meal plans. Easy delivery. Powerful analytics for your mess.
          </p>
          <div className="hero-btns">
            <div className="dwnld-btn">Download</div>
            <div className="demo-btn">Get Demo</div>
          </div>
        </div>

        {/* Right Section */}
        <div className="container-right">
        <div className="lottie-wrapper">
          <Lottie
            key={index}
            animationData={animations[index]}
            loop={false}
            onComplete={handleComplete}
          />
        </div>
      </div>
      </div>
    </section>
  );
}
