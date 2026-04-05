import profileImage from './assets/profile.png';
import officeHeroBg from './assets/office-bg-hero.svg';
import devopsHero from './assets/devops-hero.svg';
import devopsWorkflow from './assets/devops-workflow.svg';

const experience = [
  {
    date: 'Jun 2023 – Present',
    title: 'Software Development Engineer – DevOps',
    company: 'EquiLend',
    highlights: [
      'Spearheaded CI/CD pipeline automation using Jenkins, Docker, and Kubernetes, slashing deployment times by 60%',
      'Packaged microservices with Docker and deployed on AWS EKS for high availability and scalability',
      'Pioneered Spring Cloud Config Server to centralize configuration, automating 90% of deployments',
      'Architected and deployed application infrastructure on AWS, enabling 50% projected cost reduction',
      'Implemented Infrastructure as Code with Terraform, reducing provisioning time by 40%'
    ]
  },
  {
    date: 'Jan 2023 – Jun 2023',
    title: 'Software Development Intern',
    company: 'EquiLend',
    highlights: [
      'Completed intensive training in Java, Spring, Apache Camel, and SQL',
      'Developed integration-focused microservice demo application'
    ]
  },
  {
    date: 'Aug 2020 – Jan 2023',
    title: 'Programming Head',
    company: 'D.Y. Patil Robotics and AI Club',
    highlights: [
      'Led team of 10+ developers building robotics and AI systems',
      'Developed ML applications including hand sign recognition and face recognition'
    ]
  }
];

const skills = [
  { category: 'Languages', icon: '🧠', items: ['Java 8', 'Python 3.x', 'SQL', 'Shell Scripting'] },
  { category: 'Frameworks', icon: '⚙️', items: ['Spring', 'Apache Camel', 'Apache Kafka'] },
  { category: 'DevOps & Cloud', icon: '☁️', items: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Terraform'] },
  { category: 'Tools', icon: '🛠️', items: ['Git', 'Linux', 'Maven', 'Grafana', 'Prometheus'] },
];

const certifications = [
  { name: '30 Days of Google Cloud Program (2021)', link: 'https://drive.google.com/file/d/1dQZZnlNQh7m1advd19GDaIKqCos_X8fO/view?usp=sharing' },
  { name: 'AWS Cloud Practitioner', link: 'https://drive.google.com/file/d/1Vq43wOVDweuAyCc3bM8UbEcDEeTfSN61/view?usp=sharing' }
];

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">Abhishek Borase</div>
          <nav className="nav">
            <a href="#hero" onClick={() => scrollToSection('hero')}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>
          <button className="cta-btn" onClick={() => scrollToSection('contact')}>Get in Touch</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero" style={{ backgroundImage: `url(${officeHeroBg})` }}>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="badge">DevOps Engineer • Cloud Architect</span>
            <h1>Building Reliable Infrastructure at Scale</h1>
            <p>3+ years of experience designing, deploying, and maintaining cloud-native systems with expertise in CI/CD automation, Kubernetes, and AWS.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Contact Me</button>
              <a href="https://drive.google.com/file/d/1pdLCEQdIzNB4pAfkdEObo4ZlvaUiJ-I1/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-secondary">Download Resume</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={devopsHero} alt="DevOps infrastructure and pipeline" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>Professional Summary</h2>
            <p>Passionate DevOps engineer focused on delivering reliable, scalable infrastructure through automation and best practices.</p>
          </div>
          <div className="about-grid">
            <div className="about-col">
              <div className="profile-photo">
                <img src={profileImage} alt="Abhishek Borase" />
              </div>
            </div>
            <div className="about-col">
              <div className="about-card">
                <h3>🚀 Deployment Excellence</h3>
                <p>Improved deployment frequency by 150% through CI/CD automation and pipeline optimization.</p>
              </div>
              <div className="about-card">
                <h3>💰 Cost Optimization</h3>
                <p>Reduced infrastructure costs by 25% and provisioning time by 40% using Terraform and cloud optimization.</p>
              </div>
              <div className="about-card">
                <h3>📊 Operational Visibility</h3>
                <p>Built monitoring dashboards tracking 25+ business-critical processes with real-time alerting.</p>
              </div>
              <div className="about-card">
                <h3>☁️ Cloud Migration</h3>
                <p>Led successful migration from on-premise systems to AWS EKS with improved disaster recovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Workflow */}
      <section className="workflow">
        <div className="container">
          <div className="section-header center">
            <h2>My DevOps Approach</h2>
            <p>A systematic pipeline for delivering excellence continuously</p>
          </div>
          <img src={devopsWorkflow} alt="DevOps workflow pipeline" className="workflow-image" />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2>Professional Experience</h2>
            <p>Building expertise across DevOps, cloud infrastructure, and automation</p>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <div key={job.title} className="timeline-item">
                <div className="timeline-date">{job.date}</div>
                <div className="timeline-content">
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                  <ul className="highlights">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header center">
            <h2>Technical Expertise</h2>
            <p>Tools and technologies driving modern DevOps practices</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.category} className="skill-card">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <h4>{skill.category}</h4>
                </div>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="certifications">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                    ✓ {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <div className="section-header center">
            <h2>Education</h2>
          </div>
          <div className="education-grid">
            <div className="education-card">
              <h3>Bachelor of Engineering</h3>
              <p className="degree">Computer Science</p>
              <p className="school">Savitribai Phule Pune University</p>
              <p className="meta">GPA: 8.65 / 10.0 • Apr 2019 – Apr 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header center">
            <h2>Let's Work Together</h2>
            <p>Open to discussing DevOps solutions, cloud architecture, and automation projects</p>
          </div>
          <div className="contact-content">
            <a href="mailto:borseabhishek2345@gmail.com" className="contact-link">
              📧 borseabhishek2345@gmail.com
            </a>
            <a href="https://linkedin.com/in/abhishekborase" target="_blank" rel="noreferrer" className="contact-link">
              💼 linkedin.com/in/abhishekborase
            </a>
            <p className="location">📍 Pune, India</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Abhishek Borase • DevOps Engineer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
