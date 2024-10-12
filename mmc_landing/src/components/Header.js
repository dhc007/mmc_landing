import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/assets/images/logo.png" alt="Maritime Marvel" />
        <span>Maritime Marvel Cruises</span>
      </div>
    
    
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;