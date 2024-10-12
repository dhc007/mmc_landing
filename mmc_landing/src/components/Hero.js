import React, { useEffect } from 'react';
import Header from './Header';
import './Hero.css';

function Hero() {
  useEffect(() => {
    console.log('Hero component mounted');
    // Load Vimeo Player API
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="hero">
      <Header />
      <div className="video-background">
        <iframe
          src="https://player.vimeo.com/video/1018978578?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&background=1&muted=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Maritime Marvel Cruises"
        ></iframe>
      </div>
      <div className="hero-content">
        <h1>Experience the Voyage Of a Lifetime</h1>
        <p>Discover the magic of the seas with Maritime Marvel Cruises. Unparalleled luxury and unforgettable destinations await.</p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
