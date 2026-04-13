import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'FiteX — Personalized Fitness Platform',
      tech: 'React Native, Gemini API',
      date: 'Jan 2025',
      description: 'A cross-platform fitness application supporting personalized workout and nutrition recommendations.',
      bullets: [
        'Built application for 40+ active test users.',
        'Integrated Gemini API to generate adaptive fitness plans based on user activity and progress.',
        'Designed progress dashboards and visual feedback features, improving usability scores by 40% during user testing.'
      ]
    },
    {
      title: 'Sanjeevan — Accessibility Video Communication',
      tech: 'OpenCV, MediaPipe, TensorFlow.js',
      date: 'Jun 2024',
      description: 'An accessibility-focused communication system. Won 1st Place (AI Track) at Hackaccino Hackathon.',
      bullets: [
        'Developed a real-time sign language detection system using TensorFlow.js with 95% classification accuracy.',
        'Integrated WebRTC and Agora SDK to enable low-latency video communication.',
        'Implemented a landmark-based gesture classification pipeline using MediaPipe hand keypoints and a trained ML model.'
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <span className="project-date">{project.date}</span>
                </div>
              </div>
              <p className="project-tech">{project.tech}</p>
              <p className="project-desc">{project.description}</p>
              <ul className="item-bullets">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
