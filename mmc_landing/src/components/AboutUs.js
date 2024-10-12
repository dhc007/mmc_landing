// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
    return (
      <section className="about-us">
        <div className="about-us-container">
          <div className="about-us-image">
            <img src="assets/images/capimages.jpg" alt="Cruise Captain" className="captain-image" />
          </div>
          <div className="about-us-content">
            <h2>MARITIME MARVEL CRUISES</h2>
            <h1>ABOUT US</h1>
            <p>
              Maritime Marvel Cruises delivers unforgettable voyages with a perfect blend
              of luxury, adventure, and exceptional service. Founded on a commitment to
              excellence, we offer world-class amenities and breathtaking destinations.
              Join us and discover the magic of the open seas.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;