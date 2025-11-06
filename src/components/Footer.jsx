import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">KarmiQ <span>AI</span></h3>
            <p className="footer-description">
              Transforming businesses through innovative AI solutions and cutting-edge technology.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/karmiq-ai/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">AI Chatbots</a></li>
              <li><a href="#services">RAG & NLP</a></li>
              <li><a href="#services">AI Videos</a></li>
              <li><a href="#services">Web Development</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li>karmiqai@gmail.com</li>
              <li>+91-8855083808</li>
              <li>Pune, Maharashtra</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 KarmiQ AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
