import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faArrowRight, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function LinksPage() {
  const launchUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const ProjectCard = ({ title, description, url, icon, tags = [], theme = "default" }) => (
    <div className={`project-card ${theme === "cyan" ? "cyan-theme" : theme === "sage" ? "sage-theme" : ""}`} onClick={() => launchUrl(url)}>
      <div className="project-card-content">
        <div className="project-card-header">
          <FontAwesomeIcon icon={icon} className="project-card-icon" />
          <h3 className="project-card-title">{title}</h3>
        </div>
        {description && <p className="project-card-description">{description}</p>}
        <div className="project-card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-card-footer">
          <span className="visit-text">Visit</span>
          <FontAwesomeIcon icon={faArrowRight} className="project-card-arrow" />
        </div>
      </div>
    </div>
  );

  const Section = ({ title, children, theme = "default" }) => (
    <div className={`project-section ${theme === "cyan" ? "cyan-theme" : theme === "sage" ? "sage-theme" : ""}`}>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="content">
        <h1 className="page-title cyan-title">Personal Projects</h1>
        <p className="page-subtitle">A showcase of my work and contributions</p>
        
        <div className="projects-container">
          <Section title="CogniShop" theme="cyan">
            <div className="project-group">
              <ProjectCard 
                title="CogniShop Website"
                description="Semantic search platform for e-commerce with AI-powered product discovery"
                url="https://dashboard.cognishop.co/"
                icon={faGlobe}
                theme="cyan"
                tags={["AI", "E-commerce", "Search"]}
              />
              <ProjectCard 
                title="CogniShop Backend"
                description="FastAPI-based backend with PostgreSQL and pgvector for semantic search"
                url="https://github.com/bobsingh149/supersearch-backend"
                icon={faCode}
                theme="cyan"
                tags={["Python", "FastAPI", "PostgreSQL", "Vector Search"]}
              />
              <ProjectCard 
                title="CogniShop Frontend"
                description="Modern React-based UI for the CogniShop platform"
                url="https://github.com/bobsingh149/supersearch-ui"
                icon={faLaptopCode}
                theme="cyan"
                tags={["TypeScript", "React", "UI/UX"]}
              />
            </div>
          </Section>
          
          <Section title="Cliffhanger" theme="sage">
            <div className="project-group">
              <ProjectCard 
                title="Cliffhanger Website"
                description="Book social media platform for readers and authors"
                url="https://www.cliffhanger.in"
                icon={faGlobe}
                theme="sage"
                tags={["Social Media", "Books", "Community"]}
              />
              <ProjectCard 
                title="Android App"
                description="Mobile experience for the Cliffhanger platform"
                url="https://drive.google.com/file/d/1Sq32kk-FeASRwzpmBtGiDAnj_x6KZPGL/view?usp=sharing"
                icon={faLaptopCode}
                theme="sage"
                tags={["Android", "Mobile", "Flutter"]}
              />
              <ProjectCard 
                title="Frontend Repository"
                description="Code for the Cliffhanger web client"
                url="https://github.com/ArtFoliers/barter-frontend"
                icon={faGithub}
                theme="sage"
                tags={["Flutter", "Frontend"]}
              />
              <ProjectCard 
                title="Backend Repository"
                description="API and server implementation for Cliffhanger"
                url="https://github.com/ArtFoliers/Barter-backend"
                icon={faGithub}
                theme="sage"
                tags={["Java", "SpringBoot", "Backend", "API"]}
              />
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default LinksPage; 