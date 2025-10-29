"use client";

import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">MESS MEALS</div>
      <div
        className={`navbar${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <div
        className="hamburger"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Open navigation"
        aria-expanded={menuOpen}
      >
        <span style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }} />
      </div>
    </header>
  );
}
