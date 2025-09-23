import './LoFiToHiFi.css';

function LoFiToHiFi() {
  return (
    <div className="lofi-to-hifi-section">
      <div className="lofi-to-hifi-content">
        <div className="lofi-to-hifi-title">
          From Lo-fi to Hi-fi
        </div>
        <div className="lofi-to-hifi-description">
          We designed sketches, lo-fi wireframes, and hi-fi prototypes to test
          the flow and visuals.
          <br />
          <br />
          Lo-fi tests: revealed overwhelming steps in the photo feature →
          redesigned into smaller steps.
          <br />
          Hi-fi tests: confirmed the experience felt modern and engaging but
          needed clearer context.
          <br />
          5-second tests: validated first impressions as interactive and
          reflective.
          <br />
          <br />
          The final hi-fi concept combined storytelling, interactive
          reflection, and shareable outcomes.
        </div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/76355002676105e3f04691b6c04430e5ed5a318a?placeholderIfAbsent=true"
        alt="Lo-fi to Hi-fi design process"
        className="lofi-to-hifi-image"
      />
    </div>
  );
}

export default LoFiToHiFi;
