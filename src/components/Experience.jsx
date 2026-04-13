import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Amazon ML Summer School \u2014 Mentee',
      company: 'Amazon India',
      location: 'Remote \u2014 Greater Noida, India',
      date: 'Aug 2025 \u2013 Oct 2025',
      bullets: [
        'Selected among the top 10% of 80,000+ applicants through technical evaluations in machine learning fundamentals, Python, probability, statistics, and algorithms.',
        'Completed 40+ hours of applied training led by Amazon Applied Scientists, covering supervised and unsupervised learning, neural networks, ensemble models, and model evaluation.'
      ]
    },
    {
      title: 'Blockchain Engineering Intern',
      company: 'SheFi',
      location: 'Remote \u2014 Greater Noida, India',
      date: 'Jun 2025 \u2013 Aug 2025',
      bullets: [
        'Developed and tested smart contract modules for a decentralized application, focusing on secure state updates and modular contract architecture.',
        'Designed event-driven transaction workflows to improve reliability and transparency of decentralized reward distribution.',
        'Contributed 20+ code updates through a Git-based development workflow, improving maintainability and testing practices.'
      ]
    }
  ];

  const education = [
    {
      title: 'Bachelor of Technology, Computer Science (AI/ML Minor)',
      company: 'Bennett University',
      location: 'Greater Noida, India',
      date: 'Aug 2023 \u2013 Present',
      bullets: [
        'CGPA: 8.71/10.0',
        'Relevant Coursework: Data Structures & Algorithms; Database Systems; Operating Systems; Software Engineering'
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-darker">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={`exp-${index}`} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <h3 className="item-title">{exp.title}</h3>
                <h4 className="item-subtitle">{exp.company}</h4>
                <div className="item-meta">
                  <span className="meta-item"><Calendar size={14} /> {exp.date}</span>
                  <span className="meta-item"><MapPin size={14} /> {exp.location}</span>
                </div>
                <ul className="item-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {education.map((edu, index) => (
            <div key={`edu-${index}`} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <h3 className="item-title">{edu.title}</h3>
                <h4 className="item-subtitle">{edu.company}</h4>
                <div className="item-meta">
                  <span className="meta-item"><Calendar size={14} /> {edu.date}</span>
                  <span className="meta-item"><MapPin size={14} /> {edu.location}</span>
                </div>
                <ul className="item-bullets">
                  {edu.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
