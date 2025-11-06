import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    'Expert AI Engineers with proven track record',
    'Custom solutions tailored to your needs',
    'Cutting-edge technology stack',
    'Fast turnaround and dedicated support',
    'Scalable and production-ready systems',
    'Transparent pricing and communication'
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About KarmiQ AI</h2>
          <p className="section-subtitle">
            Your trusted partner in AI transformation
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-description">
              KarmiQ AI is a pioneering AI solutions provider specializing in custom chatbots, 
              intelligent automation, and AI-powered content generation. We combine expertise in 
              machine learning, natural language processing, and modern web development to deliver 
              innovative solutions that drive business growth.
            </p>
            <p className="about-description">
              Our team leverages cutting-edge technologies including LangChain, RAG systems, 
              and advanced LLMs to build intelligent applications that solve real-world problems. 
              Whether you need a customer service chatbot, content generation system, or custom 
              AI solution, we've got you covered.
            </p>

            <div className="about-features">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="about-feature"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <FaCheckCircle className="feature-icon" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="stat-card">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">30+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
