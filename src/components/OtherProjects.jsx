import './OtherProjects.css';
import AnimatedContent from './AnimatedContent';
import { Link } from 'react-router-dom';

function OtherProjects() {
  return (
      <div className="other-projects-section">
        <div className="other-projects-title">
          Other Projects
        </div>
        <div className="projects-grid">
          <Link to="/naturhistorisk-museum" className="project-card-link">
            <div className="project-card">
              <div className="portfolio-image-container">
                <img
                  src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/e604f63990469168b2ff6fd62c4407ac1a4c5c7d?placeholderIfAbsent=true"
                  alt="Naturhistorisk Museum project"
                  className="project-image"
                />
                <div className="portfolio-tag-absolute">UX/UI</div>
              </div>
              <div className="project-info">
                <div className="project-name">Naturhistorisk Museum</div>
              </div>
            </div>
          </Link>
          <div className="project-card">
            <div className="portfolio-image-container">
              <img
                src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/0eb41618f11099cc313b06a22fd2b487dc0fafaf?placeholderIfAbsent=true"
                alt="Copenhagen Fashion Week project"
                className="project-image"
              />
              <div className="portfolio-tag-absolute">UX/UI</div>
            </div>
            <div className="project-info">
              <div className="project-name">Copenhagen Fashion Week</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default OtherProjects;
