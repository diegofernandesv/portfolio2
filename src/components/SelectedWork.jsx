
import AnimatedContent from "./AnimatedContent";
import "./SelectedWork.css";
import StarBorder from "./StarBorder";

function SelectedWork() {
  return (
    <AnimatedContent>
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-container">
          <div className="selected-work-title">
            Selected work
          </div>
          <StarBorder>All work</StarBorder>
        </div>
      </div>
      <AnimatedContent>
      <div className="projects-grid">
        <div className="project-card">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d644e0bdf7def47c98433891c3b748d710a1ddbf?placeholderIfAbsent=true"
            alt="SpilCafeen project"
            className="project-image"
          />
          <div className="project-info">
            <div className="project-name">SpilCafeen</div>
            <div className="project-tags">
              <div className="project-tag">UX/UI</div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e604f63990469168b2ff6fd62c4407ac1a4c5c7d?placeholderIfAbsent=true"
            alt="Naturhistorisk Museum project"
            className="project-image"
          />
          <div className="project-info">
            <div className="project-name">Naturhistorisk Museum</div>
            <div className="project-tags">
              <div className="project-tag">UX/UI</div>
              <div className="project-tag">Coding</div>
            </div>
          </div>
        </div>
      </div>
      </AnimatedContent>

      <div className="selected-work-bottom">
        <div className="projects-grid">
          <div className="project-card">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/be9b66157cf5389a473ef1eae1c08fc512b8aa79?placeholderIfAbsent=true"
              alt="Trailbound project"
              className="project-image"
            />
            <div className="project-info">
              <div className="project-name">Trailbound</div>
              <div className="project-tags">
                <div className="project-tag">Shopify</div>
                <div className="project-tag">Branding</div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0eb41618f11099cc313b06a22fd2b487dc0fafaf?placeholderIfAbsent=true"
              alt="Copenhagen Fashion Week project"
              className="project-image"
            />
            <div className="project-info">
              <div className="project-name">Copenhagen Fashion Week</div>
              <div className="project-tags">
                <div className="project-tag">UX/UI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimatedContent>
  );
}

export default SelectedWork;
