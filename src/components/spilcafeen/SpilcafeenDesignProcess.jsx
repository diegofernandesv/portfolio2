import './SpilcafeenDesignProcess.css';

function SpilcafeenDesignProcess() {
  return (
    <div className="spilcafeen-design-process">
      <div className="spilcafeen-design-process-header">
        <div className="spilcafeen-design-process-step">
          <div className="spilcafeen-design-process-step-number">
            <div>2</div>
          </div>
          <div className="spilcafeen-design-process-step-title">
            Design Process
          </div>
        </div>
        <div className="spilcafeen-design-process-description">
          Using the Double Diamond framework, we structured our design process
          around research, ideation, and iteration. This method helped us stay
          user-focused while fostering clarity, teamwork, and creativity.
        </div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/bbefa86110601625aaef537765440f7303066d38?placeholderIfAbsent=true"
        className="spilcafeen-design-process-image"
        alt="Double Diamond design process framework visualization"
      />
    </div>
  );
}

export default SpilcafeenDesignProcess;
