import React from "react";
import "./header.css";

export default function Header() {
    return(
        <header className="header">
             <div className="logo">MESS MEALS</div>
             <nav className="navbar">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/contact">Contact</a>
             </nav>
        </header>
    )
}