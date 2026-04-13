import React from 'react';
import { Mail, Phone, Code2 } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.svg.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.svg.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  return (
    <section id="about" className="section hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">Srishti Singh.</h1>
          <h2 className="title">I build scalable backend systems.</h2>
          
          <p className="summary">
            Third-year Computer Science undergraduate (CGPA: 8.71/10) at Bennett University focused on backend and software engineering. Experienced in building API-driven web applications and scalable backend services through 10+ projects across hackathons and open-source initiatives. Interested in designing reliable, high-performance systems for large-scale cloud services.
          </p>

          <div className="social-links">
            <a href="https://github.com/SrishtiSingh77" target="_blank" rel="noopener noreferrer" className="icon-link">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/in/srishti-singh-6a589928a" target="_blank" rel="noopener noreferrer" className="icon-link">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:singhsrishti01032005@gmail.com" className="icon-link">
              <Mail size={24} />
            </a>
            <a href="https://leetcode.com/u/SrishtiSingh" target="_blank" rel="noopener noreferrer" className="icon-link" title="Leetcode">
              <Code2 size={24} />
            </a>
            <a href="tel:+916395735460" className="icon-link" title="Phone">
              <Phone size={24} />
            </a>
          </div>

          <div className="hero-cta">
            <a href="#experience" className="btn">View Experience</a>
            <a href="#projects" className="btn btn-outline">My Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
