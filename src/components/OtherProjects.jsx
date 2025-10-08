import './OtherProjects.css';
import { Link } from 'react-router-dom';

const defaultProjects = [
  {
    to: '/naturhistorisk-museum',
    image:
      'https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/e604f63990469168b2ff6fd62c4407ac1a4c5c7d?placeholderIfAbsent=true',
    tag: 'UX/UI',
    name: 'Naturhistorisk Museum',
  },
  {
    to: '/oops-behance',
    image:
      'https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/0eb41618f11099cc313b06a22fd2b487dc0fafaf?placeholderIfAbsent=true',
    tag: 'UX/UI',
    name: 'Copenhagen Fashion Week',
  },
];

function OtherProjects({ projects }) {
  const projectList = Array.isArray(projects) && projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="other-projects-section">
      <div className="other-projects-title">Other Projects</div>
      <div className="projects-grid">
        {projectList.map(({ to, image, tag, name }) => (
          <Link to={to} className="project-card-link" key={name}>
            <div className="project-card">
              <div className="portfolio-image-container">
                <img src={image} alt={`${name} project`} className="project-image" />
                <div className="portfolio-tag-absolute">{tag}</div>
              </div>
              <div className="project-info">
                <div className="project-name">{name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OtherProjects;
