import './DesignProcess.css';
import AnimatedContent from './AnimatedContent';

function DesignProcess() {
  return (
    <AnimatedContent>
      <div className="design-process-section">
        <div className="design-process-image">
          <img
            src="https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/e3fb1c5d59a7b1b5d3995bd52f02c46f7c418238?placeholderIfAbsent=true"
            alt="Design process visualization"
            className="process-image"
          />
        </div>
        <div className="design-process-content">
          <div className="design-process-text">
            <div className="design-process-title">
              Design Process
            </div>
            <div className="design-process-description">
              Using the Double Diamond framework, we structured our design
              process around research, ideation, and iteration. This method
              helped us stay user-focused while fostering clarity, teamwork, and
              creativity.
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}

export default DesignProcess;
