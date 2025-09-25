import { useNavigate } from "react-router-dom";
import AnimatedContent from "./AnimatedContent";
import "./SelectedWork.css";
import StarBorder from "./StarBorder";

function SelectedWork() {
  const navigate = useNavigate();

  const handleProjectClick = (projectName) => {
    if (projectName === "SpilCafeen") {
      navigate("/spilcafeen");
    } else if (projectName === "Naturhistorisk Museum") {
      navigate("/naturhistorisk-museum");
    } else if (projectName === "Copenhagen Fashion Week") {
      navigate("/oops-behance");
    }
  };

  return (
    <AnimatedContent>
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-container">
          <div className="selected-work-title">
            Selected work
          </div>
          <StarBorder as="button" onClick={() => navigate('/projects')}>All work</StarBorder>
        </div>
      </div>
      <AnimatedContent>
      <div className="projects-grid">
        <div className="project-card" onClick={() => handleProjectClick("SpilCafeen")}>
          <div className="portfolio-image-container">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d644e0bdf7def47c98433891c3b748d710a1ddbf?placeholderIfAbsent=true"
              alt="SpilCafeen project"
              className="project-image"
            />
            <div className="portfolio-tag-absolute">UX/UI</div>
          </div>
          <div className="project-info">
            <div className="project-name">SpilCafeen-Figuring out what to play</div>
          </div>
        </div>

        <div className="project-card" onClick={() => handleProjectClick("Naturhistorisk Museum")}>
          <div className="portfolio-image-container">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e604f63990469168b2ff6fd62c4407ac1a4c5c7d?placeholderIfAbsent=true"
              alt="Naturhistorisk Museum project"
              className="project-image"
            />
            <div className="portfolio-tag-absolute">UX/UI</div>
          </div>
          <div className="project-info">
            <div className="project-name">Naturhistorisk Museum</div>
          </div>
        </div>
      </div>
      </AnimatedContent>

      <div className="selected-work-bottom">
        <div className="projects-grid">
          <div className="project-card">
            <div className="portfolio-image-container">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/be9b66157cf5389a473ef1eae1c08fc512b8aa79?placeholderIfAbsent=true"
                alt="Trailbound project"
                className="project-image"
              />
              <div className="portfolio-tag-absolute">Branding</div>
            </div>
            <div className="project-info">
              <div className="project-name">Trailbound</div>
            </div>
          </div>

          <div className="project-card" onClick={() => handleProjectClick("Copenhagen Fashion Week")}>
            <div className="portfolio-image-container">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0eb41618f11099cc313b06a22fd2b487dc0fafaf?placeholderIfAbsent=true"
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
    </div>
    </AnimatedContent>
  );
}

export default SelectedWork;
