import React from 'react';
import { Award, Users } from 'lucide-react';

const Leadership = () => {
  return (
    <section className="section bg-darker">
      <div className="container">
        <h2 className="section-title">Leadership & Activities</h2>
        <div className="projects-grid">
          
          <div className="card project-card">
            <div className="project-header">
              <h3 className="project-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={24} color="var(--accent-color)" /> Technical Speaker
              </h3>
            </div>
            <p className="project-desc">
              Delivered hands-on workshops and technical sessions on full-stack development, AI integration, and modern web technologies, mentoring and engaging 300+ students.
            </p>
          </div>

          <div className="card project-card">
            <div className="project-header">
              <h3 className="project-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={24} color="var(--accent-color)" /> Competition Success
              </h3>
            </div>
            <p className="project-desc">
              Recognized as a GSSOC Extended Contributor (2024); secured 4 wins across 10+ hackathons, demonstrating innovation, strong collaboration, and rapid technical solution development.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;
