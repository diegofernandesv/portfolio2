import { useNavigate } from 'react-router-dom';
import './ProjectHeader.css';
import AnimatedContent from './AnimatedContent';

function ProjectHeader({ title, backgroundImage, duration, team, date }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/projects');
  };

  // Render title with a line break after a dash/en dash if present
  let renderedTitle = title;
  if (typeof title === 'string') {
    const m = title.match(/^(.*?\s[-–])\s*(.*)$/);
    if (m && m[2]) {
      renderedTitle = (
        <>
          {m[1].trim()}<br />{m[2]}
        </>
      );
    }
  }

  return (
    <AnimatedContent>
    <div className="project-header">
      <img 
        src={backgroundImage} 
        alt="" 
        className="project-background-image"
      />
      <div className="project-header-content">
        <button className="go-back-button" onClick={handleGoBack}>
          Go back
        </button>
      </div>
    </div>
    </AnimatedContent>
  );
}

export default ProjectHeader;
