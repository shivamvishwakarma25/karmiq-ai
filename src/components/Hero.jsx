import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your Business with <span className="gradient-text">AI Innovation</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Custom AI chatbots, intelligent automation, AI-generated content, and cutting-edge solutions tailored for your success
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn btn-primary">
                Get Started <FaArrowRight />
              </button>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <button className="btn btn-secondary">
                Our Services
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="hero-background">
          <div className="hero-circle circle-1"></div>
          <div className="hero-circle circle-2"></div>
          <div className="hero-circle circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
