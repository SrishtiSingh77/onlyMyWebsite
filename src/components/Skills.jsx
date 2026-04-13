import React from 'react';
import { Code, Layout, Database, Server, Settings, Terminal, Braces, Cloud } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'C++', icon: <Code size={40} color="#00599C" /> },
    { name: 'Python', icon: <Terminal size={40} color="#3776AB" /> },
    { name: 'JavaScript', icon: <Braces size={40} color="#F7DF1E" /> },
    { name: 'React.js', icon: <Layout size={40} color="#61DAFB" /> },
    { name: 'Node.js/Express', icon: <Server size={40} color="#339933" /> },
    { name: 'Spring Boot (Java)', icon: <Settings size={40} color="#6DB33F" /> },
    { name: 'Databases', icon: <Database size={40} color="#4479A1" /> }, // Postgres, MySQL, Mongo
    { name: 'Cloud & DevOps', icon: <Cloud size={40} color="#FF9900" /> } // AWS, Docker, CI/CD
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">What I do</h2>
        <p className="section-subtitle">
          I am a 3rd Year CS Undergrad focused on Backend & Software Engineering. I build API-driven web applications and scalable backend systems, skilled in the following technologies.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
