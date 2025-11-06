import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>KarmiQ <span>AI</span></h1>
        </div>
        
        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
          <Link to="services" smooth={true} duration={500} onClick={toggleMenu}>Services</Link>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
          <Link to="portfolio" smooth={true} duration={500} onClick={toggleMenu}>Portfolio</Link>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
