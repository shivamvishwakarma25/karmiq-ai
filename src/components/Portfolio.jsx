import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const portfolioData = [
  {
    title: 'E-commerce AI Chatbot',
    description: 'Intelligent chatbot with RAG for product recommendations and customer support',
    tech: ['LangChain', 'RAG', 'Groq API', 'Streamlit'],
    link: 'https://e-commerce-faq-chatbot-gyyq8blsect2j7z75pwxdi.streamlit.app/'
  },
  {
    title: 'KarmiQ AI Assistant',
    description: 'Interactive AI assistant for customers with voice capabilities and information of KarmiQ AI',
    tech: ['Vapi', 'OpenAI', 'CRM', 'IVR'],
    link: 'https://vapi.ai?demo=true&shareKey=18bd66d2-a09c-4c6c-941e-c78e2157b458&assistantId=d3ad9a30-3057-42b3-b8d0-20c659a8e7b6'
  },
  {
    title: 'Content Generation Platform',
    description: 'AI-powered blog and social media content generator with SEO optimization',
    tech: ['Veo 3.1', 'FLOW', 'HeyGen', 'Nano Banana'],
    link:'https://drive.google.com/file/d/1xZ_kZkFOUX6UASrsrkixT-0RRrFLyatw/view?usp=sharing'
  },
  {
    title: 'Blogify - AI Blog Generator',
    description: 'An AI-powered blog writing assistant that generates engaging blog posts based on a title and keywords.',
    tech: ['LLM', 'HuggingFace', 'LangChain', 'NLP'],
    link: 'https://blogify-ds3e3ok4b5dkr3bybt28o8.streamlit.app/'
  },  

];

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Showcase of our innovative AI projects and solutions
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                
                <div className="portfolio-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <button className="portfolio-link">
                  View Details <FaExternalLinkAlt />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
