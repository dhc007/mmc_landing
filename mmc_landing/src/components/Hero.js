// src/components/Hero.js
import React from 'react';
import Header from './Header';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <Header />

      {/* Full-bleed image background */}
      <div className="hero-media" aria-hidden="true">
        <img
          src="/assets/images/ship_hero.png"  // file is in public/assets/images/ship_hero.png
          alt=""
          loading="eager"
          fetchpriority="high"
        />
      </div>

      {/* overlay for text readability */}
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <h1>Experience the Voyage Of a Lifetime</h1>
        <p>
          Discover the magic of the seas with Maritime Marvel Cruises. Unparalleled luxury
          and unforgettable destinations await.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
