// Hero.js
import React from 'react';
import Header from './Header';
import './Hero.css';

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: 'url(/assets/images/ship_hero.png)' }} // image is in public/assets/images
    >
      <Header />

      {/* subtle gradient overlay for text readability */}
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>Experience the Voyage Of a Lifetime</h1>
        <p>
          Discover the magic of the seas with Maritime Marvel Cruises. Unparalleled luxury and unforgettable
          destinations await.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
