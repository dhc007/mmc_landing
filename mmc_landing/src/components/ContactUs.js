// src/components/ContactUs.js
import React, { useState } from 'react';


const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: JSON.stringify({
        ...formData,
        accessKey: 'e9e845e0-41dd-4486-ae4d-898cd76c4a18',
        replyTo: '@'
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="get-in-touch">
          <h2>Get in Touch</h2>
          <p>Phone:(068914)+65 90556461</p>
          <p>Email: team@maritimemarvelcruises.com</p>
          <p>Address: Singapore Business Federation Center
          #14-04, 160 Robinson Road,Singapore</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
        <div className="contact-form">
          <h2>We'd love to hear from you</h2>
          {isSubmitted ? (
            <p className="success-message">Thank you! Your message has been sent successfully.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="send-button">SEND</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
