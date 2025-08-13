// src/components/Hero.js
import React from 'react';
import Header from './Header';
import './Hero.css';

function Hero() {
  const heroBg = `${process.env.PUBLIC_URL}/assets/images/ship_hero.png`; // public-safe path

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url("${heroBg}")` }}
    >
      <Header />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1>Experience the Voyage Of a Lifetime</h1>
        <p>
          Discover the magic of the seas with Maritime Marvel Cruises. Unparalleled luxury and unforgettable destinations await.
        </p>
        <button className="learn-more">Learn More</button>
      </div>

      {/* Preload to prevent flash/CLS */}
      <link rel="preload" as="image" href={heroBg} />
      {/* Basic <noscript> fallback for SEO/no-JS */}
      <noscript>
        <img src={heroBg} alt="" style={{ display: 'none' }} />
      </noscript>
    </section>
  );
}

export default Hero;
