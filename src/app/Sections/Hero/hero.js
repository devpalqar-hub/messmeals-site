import React from 'react'
import "./hero.css";
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='hero'>
        <div className='container'>
          {/* left section */}
            <div className='container-left'>
                <h1 className="title"><span>MESS MEALS</span> Management</h1>
                <p className="desc">Efficient meal plans. Easy delivery. Powerful analytics for your mess.</p>
                <div className="hero-btns">
                  <div className="dwnld-btn">Download</div>
                  <div className="demo-btn">Get Demo</div>
                </div>
            </div>

          {/* right section */}
          <div className="container-right">
            <Image src="/heroImg.png" alt="Delivery App Preview" className="hero-image" width={400} height={400}></Image>
          </div>
        </div>
    </section>
  )
}
