import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaVideo, FaCode, FaMagic, FaTools } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    icon: <FaRobot />,
    title: 'Custom AI Chatbots',
    description: 'Intelligent conversational AI powered by RAG and NLP for seamless customer engagement and support.'
  },
  {
    icon: <FaBrain />,
    title: 'RAG & NLP Solutions',
    description: 'Advanced retrieval-augmented generation and natural language processing for domain-specific AI applications.'
  },
  {
    icon: <FaVideo />,
    title: 'AI-Generated Videos',
    description: 'Create stunning AI-powered videos and visual content for marketing, education, and entertainment.'
  },
  {
    icon: <FaCode />,
    title: 'Website Development',
    description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.'
  },
  {
    icon: <FaMagic />,
    title: 'Content Generation',
    description: 'On-demand AI content creation for blogs, social media, marketing materials, and more.'
  },
  {
    icon: <FaTools />,
    title: 'Custom AI Services',
    description: 'Tailored AI solutions including automation, data analysis, and intelligent systems for your specific needs.'
  }
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive AI solutions to elevate your business to the next level
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
