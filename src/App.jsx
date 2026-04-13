import React, { useState } from 'react';
import './index.css';

const WindowIcons = () => (
  <div className="os-titlebar-icons">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  </div>
);

const TitleCircles = () => (
  <div className="title-circles">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
);

const ProgressBar = ({ level }) => (
  <div className="progress-track">
    <div className="progress-fill" style={{ width: `${level}%` }}></div>
  </div>
);

const PixelCloud = ({ top, left, width, opacity = 1 }) => (
  <svg style={{ position: 'absolute', top, left, width, opacity }} viewBox="0 0 10 6" fill="white">
    <rect x="2" y="0" width="4" height="1"/>
    <rect x="1" y="1" width="7" height="1"/>
    <rect x="0" y="2" width="10" height="1"/>
    <rect x="0" y="3" width="9" height="1"/>
    <rect x="1" y="4" width="8" height="1"/>
    <rect x="3" y="5" width="4" height="1"/>
  </svg>
);

const Clouds = () => (
  <>
    <PixelCloud top="5%" left="15%" width="120px" opacity={0.8} />
    <PixelCloud top="20%" left="70%" width="180px" opacity={0.9} />
    <PixelCloud top="45%" left="5%" width="100px" opacity={0.7} />
    <PixelCloud top="65%" left="80%" width="200px" opacity={0.8} />
    <PixelCloud top="85%" left="20%" width="140px" opacity={0.6} />
  </>
);

/* Pixel Theme Icons replacing emojis */
const WindIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'text-bottom' }}>
    <rect x="0" y="4" width="8" height="2"/>
    <rect x="2" y="8" width="12" height="2"/>
    <rect x="4" y="12" width="6" height="2"/>
  </svg>
);

const BookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'text-bottom', marginRight: '6px' }}>
    <rect x="2" y="2" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"/>
    <rect x="7" y="2" width="2" height="12"/>
  </svg>
);

const RocketIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'text-bottom', marginRight: '6px' }}>
    <path d="M8 0 L12 4 L12 10 L16 14 L16 16 L12 16 L10 12 L6 12 L4 16 L0 16 L0 14 L4 10 L4 4 Z"/>
  </svg>
);

const CameraIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'text-bottom', marginRight: '6px' }}>
    <rect x="2" y="4" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="2"/>
    <rect x="12" y="6" width="3" height="4"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'text-bottom', marginRight: '6px' }}>
    <rect x="4" y="2" width="8" height="6"/>
    <rect x="6" y="8" width="4" height="4"/>
    <rect x="4" y="12" width="8" height="2"/>
    <rect x="2" y="2" width="2" height="4"/>
    <rect x="12" y="2" width="2" height="4"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ display: 'inline-block', verticalAlign: 'text-bottom', marginRight: '6px' }}>
    <rect x="2" y="4" width="12" height="10" />
    <path d="M2 8h12 M4 2v4 M12 2v4" />
  </svg>
);

const MusicIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'text-bottom', marginRight: '6px' }}>
    <path d="M4 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM4 14V2l10 2v8M4 6l10 2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

function App() {
  const [windBlowing, setWindBlowing] = useState(false);

  return (
    <>
      <div className="clouds-wrapper">
        <div className="clouds-layer cloud-blowing" style={{ animationPlayState: windBlowing ? 'running' : 'paused' }}>
          <Clouds />
        </div>
        <div className="clouds-layer cloud-blowing" style={{ animationPlayState: windBlowing ? 'running' : 'paused', left: '-100vw' }}>
          <Clouds />
        </div>
      </div>

      <div className="app-container">
        
        {/* Main Nav Bar */}
        <div className="os-window">
          <div className="os-titlebar" style={{ borderBottom: 'none' }}>
            <div className="nav-buttons">
              <button className="retro-btn" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button>
              <button className="retro-btn" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button>
              <button className="retro-btn" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>Experience</button>
              <button className="retro-btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button>
            </div>
            <WindowIcons />
          </div>
        </div>

        {/* Digital Me Section */}
        <div className="top-section" id="about">
          <div className="digital-me-panel">
            <div className="digital-me-title">
              <span>Digital Me</span>
              <TitleCircles />
            </div>
            <div className="avatar-container">
              <img src="/avatar.png" alt="Srishti Avatar" />
            </div>
          </div>
          
          <div className="speech-bubble" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>Hi! I'm Srishti. Welcome to my portfolio!</div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className="retro-btn" onClick={() => setWindBlowing(!windBlowing)}>
                {windBlowing ? 'Stop the Wind' : <>Blow the Wind <WindIcon /></>}
              </button>
              <span style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: '0.85rem', color: '#888', fontStyle: 'italic', margin: '0 4px' }}>- OR -</span>
              <a href="https://drive.google.com/file/d/1tF-geI6wJSHO3fgVPX3jQohiTKNopYAU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="retro-btn" style={{ textDecoration: 'none' }}>
                View my Resume
              </a>
            </div>
          </div>
        </div>

        {/* --- RESPONSIVE WINDOW GRID --- */}
        <div className="windows-layout">

          {/* Window 1: About Me & Education */}
          <div className="os-window window-wide">
            <div className="os-titlebar">
              <span>ABOUT_ME.TXT</span>
              <WindowIcons />
            </div>
            <div className="os-content about-me-text">
              <div className="content-flex">
                <div className="content-flex-item">
                  <p>
                    Hi, I'm Srishti, a passionate <strong>Backend Developer</strong> and tech enthusiast currently pursuing a Bachelor of Technology in Computer Science (AI/ML Minor) at Bennett University (2023-2027). 
                  </p>
                  <p>
                    My journey revolves around building reliable backend systems, developing API-driven web applications, and contributing to open-source initiatives. With 10+ projects and multiple hackathon wins, I am continuously exploring scalable cloud infrastructure and the integration of Artificial Intelligence into modern platforms.
                  </p>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Email: singhsrishti01032005@gmail.com</li>
                    <li>Phone: +91-6395735460</li>
                    <li>Links: GitHub / LinkedIn / LeetCode</li>
                  </ul>
                </div>
                
                <div className="content-flex-item" style={{ borderLeft: '2px dashed var(--border-color)', paddingLeft: '20px' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '10px' }}><BookIcon />Education</p>
                  <div className="retro-timeline-container">
                    <div className="retro-timeline-item">
                      <div className="timeline-dot"></div>
                      <p style={{ fontWeight: 'bold' }}>Bennett University</p>
                      <p style={{ fontSize: '0.85rem' }}>B.Tech Computer Science (AI/ML Minor)</p>
                      <p style={{ fontSize: '0.85rem', marginBottom: '8px', color: '#555' }}>Aug 2023 – Present | CGPA: 8.71/10.0</p>
                    </div>
                    <div className="retro-timeline-item">
                      <div className="timeline-dot"></div>
                      <p style={{ fontWeight: 'bold' }}>Schooling</p>
                      <p style={{ fontSize: '0.85rem' }}>Class XII: Ajmani Intl. School (93%)</p>
                      <p style={{ fontSize: '0.85rem' }}>Class X: Ryan Intl. School (95%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Window 2: Core Skills */}
          <div className="os-window" id="skills">
            <div className="os-titlebar">
              <span>TECH_STACK.EXE</span>
              <WindowIcons />
            </div>
            <div className="os-content">
              <div className="skill-item"><span>FastAPI/Django</span><ProgressBar level={85} /></div>
              <div className="skill-item"><span>Express.js</span><ProgressBar level={80} /></div>
              <div className="skill-item"><span>Spring Boot</span><ProgressBar level={70} /></div>
              <div className="skill-item"><span>PostgreSQL/DBs</span><ProgressBar level={85} /></div>
              <div className="skill-item"><span>AWS & Docker</span><ProgressBar level={75} /></div>
              <div className="skill-item"><span>CI/CD</span><ProgressBar level={70} /></div>
            </div>
          </div>

          {/* Window 3: Languages */}
          <div className="os-window">
            <div className="os-titlebar">
              <span>LANGUAGES.EXE</span>
              <WindowIcons />
            </div>
            <div className="os-content">
              <div className="skill-item"><span>C++ & Java</span><ProgressBar level={90} /></div>
              <div className="skill-item"><span>Python</span><ProgressBar level={85} /></div>
              <div className="skill-item"><span>JavaScript/TS</span><ProgressBar level={85} /></div>
              <div className="skill-item"><span>SQL</span><ProgressBar level={85} /></div>
              <div className="skill-item"><span>React.js</span><ProgressBar level={80} /></div>
              <div className="skill-item"><span>Vue.js</span><ProgressBar level={70} /></div>
            </div>
          </div>

          {/* Window 4: Experience */}
          <div className="os-window window-wide" id="experience">
            <div className="os-titlebar">
              <span>EXPERIENCE_TIMELINE.EXE</span>
              <WindowIcons />
            </div>
            <div className="os-content about-me-text">
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px' }}>Milestones of My Tech Odyssey</p>
              
              <div className="retro-timeline-container">
                <div className="retro-timeline-item">
                  <div className="timeline-dot"></div>
                  <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Amazon ML Summer School - Mentee</p>
                  <p style={{ fontSize: '0.9rem', marginBottom: '8px', color: '#555' }}>Aug - Oct 2025 | Remote</p>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', marginBottom: '10px' }}>
                    <li style={{ marginBottom: '6px' }}>Selected among top 10% of 80,000+ applicants through technical evaluations in ML, Python, probability, and algorithms.</li>
                    <li>Completed 40+ hours of applied training led by Amazon Applied Scientists on supervised/unsupervised learning, neural networks, and model evaluation.</li>
                  </ul>
                  <a href="https://drive.google.com/file/d/1yC8nawuq5Fz4nKeaMdpfj0A0Gj8vK6lz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="retro-btn retro-btn-outline" style={{ textDecoration: 'none', padding: '4px 10px', fontSize: '0.8rem', display: 'inline-block' }}>View Certificate</a>
                </div>
                
                <div className="retro-timeline-item">
                  <div className="timeline-dot"></div>
                  <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>SheFi - Blockchain Eng Intern</p>
                  <p style={{ fontSize: '0.9rem', marginBottom: '8px', color: '#555' }}>Jun - Aug 2025 | Remote</p>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '6px' }}>Developed and tested smart contract modules for a decentralized application, focusing on secure state updates.</li>
                    <li style={{ marginBottom: '6px' }}>Designed event-driven transaction workflows to improve reward distribution transparency.</li>
                    <li>Contributed 20+ code updates through a Git-based workflow improving maintainability.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Window 5: Projects */}
          <div className="os-window window-wide" id="projects">
            <div className="os-titlebar">
              <span>PROJECTS.EXE</span>
              <WindowIcons />
            </div>
            <div className="os-content about-me-text">
              <div className="project-grid">
                
                {/* Project Card 1 */}
                <div className="inner-card">
                  <img src="/fitex.png" alt="FiteX Dashboard" className="project-image" />
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}><RocketIcon />FiteX</p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '10px', color: '#666' }}>Personalized Fitness Platform</p>
                  <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                    Built a cross-platform fitness application supporting personalized workout and nutrition recommendations for 40+ active test users. Designed progress dashboards and visual feedback, improving usability by 40%.
                  </p>
                  <div className="pill-container">
                    <span className="retro-pill">React Native</span>
                    <span className="retro-pill">Gemini API</span>
                    <span className="retro-pill">Mobile UI</span>
                  </div>
                  <div className="btn-container">
                    <a href="https://github.com/SrishtiSingh77/FiteX-App" target="_blank" rel="noopener noreferrer" className="retro-btn retro-btn-outline" style={{ textDecoration: 'none' }}>GitHub</a>
                  </div>
                </div>
                
                {/* Project Card 2 */}
                <div className="inner-card">
                  <img src="/sanjeevan.png" alt="Sanjeevan Interface" className="project-image" />
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}><CameraIcon />Sanjeevan</p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '10px', color: '#666' }}>Accessibility Video Comm.</p>
                  <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                    1st Place at Hackaccino. Developed a real-time sign language detection system with 95% accuracy utilizing a landmark-based gesture ML classification pipeline. Integrated WebRTC for low-latency video.
                  </p>
                  <div className="pill-container">
                    <span className="retro-pill">OpenCV</span>
                    <span className="retro-pill">MediaPipe</span>
                    <span className="retro-pill">TensorFlow.js</span>
                  </div>
                  <div className="btn-container">
                    <a href="https://github.com/SrishtiSingh77/Sanjeevan2.0" target="_blank" rel="noopener noreferrer" className="retro-btn retro-btn-outline" style={{ textDecoration: 'none' }}>GitHub</a>
                    <a href="https://sanjeevan-topaz.vercel.app/" target="_blank" rel="noopener noreferrer" className="retro-btn" style={{ textDecoration: 'none', color: '#000' }}>Preview</a>
                  </div>
                </div>

                {/* Project Card 3: PathShala */}
                <div className="inner-card">
                  <img src="/pathshala.png" alt="PathShala Website" className="project-image" />
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}><BookIcon />PathShala</p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '10px', color: '#666' }}>Educational Platform</p>
                  <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                    A comprehensive educational platform connecting students with coaching institutes. Provides a seamless interface for students seeking quality education and coaching centers looking to expand their reach.
                  </p>
                  <div className="pill-container">
                    <span className="retro-pill">React</span>
                    <span className="retro-pill">Node.js</span>
                    <span className="retro-pill">DBMS</span>
                  </div>
                  <div className="btn-container">
                    <a href="https://github.com/SrishtiSingh77/PathShala" target="_blank" rel="noopener noreferrer" className="retro-btn retro-btn-outline" style={{ textDecoration: 'none' }}>GitHub</a>
                    <a href="https://pathshala-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="retro-btn" style={{ textDecoration: 'none', color: '#000' }}>Preview</a>
                  </div>
                </div>

                {/* Project Card 4: Calix */}
                <div className="inner-card">
                  <img src="/calix.png" alt="Calix Booking Platform" className="project-image" />
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}><CalendarIcon />Calix</p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '10px', color: '#666' }}>Scheduling vs Booking Platform</p>
                  <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                    A full-stack scheduling application inspired by Cal.com. Lets a default "owner" define availability and event types, exposing a public booking flow seamlessly for visiting users.
                  </p>
                  <div className="pill-container">
                    <span className="retro-pill">Next.js</span>
                    <span className="retro-pill">PostgreSQL</span>
                    <span className="retro-pill">Fullstack</span>
                  </div>
                  <div className="btn-container">
                    <a href="https://github.com/SrishtiSingh77/scaler" target="_blank" rel="noopener noreferrer" className="retro-btn retro-btn-outline" style={{ textDecoration: 'none' }}>GitHub</a>
                    <a href="https://srishti-scaler.vercel.app/" target="_blank" rel="noopener noreferrer" className="retro-btn" style={{ textDecoration: 'none', color: '#000' }}>Preview</a>
                  </div>
                </div>

                {/* Project Card 5: SentiTune */}
                <div className="inner-card">
                  <img src="/sentitune.png" alt="SentiTune App" className="project-image" />
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}><MusicIcon />SentiTune</p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '10px', color: '#666' }}>Music Recommendation</p>
                  <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                    An intelligent music recommendation web app designed to suggest personalized songs based entirely on the user's current mood.
                  </p>
                  <div className="pill-container">
                    <span className="retro-pill">Python</span>
                    <span className="retro-pill">Machine Learning</span>
                    <span className="retro-pill">React</span>
                  </div>
                  <div className="btn-container">
                    <a href="https://github.com/SrishtiSingh77/SentiTune" target="_blank" rel="noopener noreferrer" className="retro-btn retro-btn-outline" style={{ textDecoration: 'none' }}>GitHub</a>
                    <a href="https://vaibhavkothari33.github.io/SentiTune/" target="_blank" rel="noopener noreferrer" className="retro-btn" style={{ textDecoration: 'none', color: '#000' }}>Preview</a>
                  </div>
                </div>

                {/* Project Card 6: ComicVerse */}
                <div className="inner-card">
                  <img src="/comicverse.png" alt="ComicVerse Store" className="project-image" />
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}><BookIcon />ComicVerse</p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '10px', color: '#666' }}>Online Comic Store</p>
                  <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                    A dynamic, high-fidelity online comic book store. Demonstrates advanced front-end design, responsive layout, and client-side interactivity without relying on any backend dependencies.
                  </p>
                  <div className="pill-container">
                    <span className="retro-pill">HTML5</span>
                    <span className="retro-pill">CSS3</span>
                    <span className="retro-pill">Vanilla JS</span>
                  </div>
                  <div className="btn-container">
                    <a href="https://github.com/SrishtiSingh77/comicVerse" target="_blank" rel="noopener noreferrer" className="retro-btn retro-btn-outline" style={{ textDecoration: 'none' }}>GitHub</a>
                    <a href="https://srishtisingh77.github.io/comicVerse/html/index.html" target="_blank" rel="noopener noreferrer" className="retro-btn" style={{ textDecoration: 'none', color: '#000' }}>Preview</a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Window 6: Achievements & Leadership */}
          <div className="os-window window-wide">
            <div className="os-titlebar">
              <span>ACHIEVEMENTS.EXE</span>
              <WindowIcons />
            </div>
            <div className="os-content about-me-text">
              <div className="content-flex">
                <div className="inner-card">
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '4px' }}><TrophyIcon />Leadership & Community</p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '10px', color: '#666' }}>Mentoring & Hackathons</p>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', marginTop: '10px', flex: 1 }}>
                    <li style={{ marginBottom: '8px' }}><span style={{fontWeight:'bold'}}>Technical Speaker:</span> Delivered hands-on workshops on full-stack/AI to 300+ students.</li>
                    <li style={{ marginBottom: '8px' }}><span style={{fontWeight:'bold'}}>Hackathon Wins:</span> Secured 4 wins across 10+ hackathons demonstrating rapid solution development.</li>
                    <li><span style={{fontWeight:'bold'}}>GSSOC 2024:</span> Recognized Extended Contributor.</li>
                  </ul>
                  <div className="btn-container">
                    <button className="retro-btn retro-btn-outline">View Certificate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
