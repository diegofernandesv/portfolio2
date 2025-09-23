import './DesignSystem.css';
import AnimatedContent from './AnimatedContent';

function DesignSystem() {
  return (
      <div className="design-system-section">
        <div className="design-system-header">
          <div className="design-system-title">
            Design System
          </div>
          <div className="design-system-description">
            Building on our lo-fi wireframes, we created a design system in Figma
            to bring structure and consistency to the hi-fi prototype. It defined
            colors, typography, grids, and reusable UI components, all aligned
            with Spilcaféen's cozy and playful brand identity.
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/eacb60cbd2a9cd39ae85ce8c39022dfdf1a13ab4?placeholderIfAbsent=true"
          alt="Design System Overview"
          className="design-system-image"
        />
        <div className="card-components-section">
          <img
            src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/90b84fab3375b660146e8170e84f0cf6b5b632a3?placeholderIfAbsent=true"
            alt="Card Components Example"
            className="card-components-image"
          />
          <div className="card-components-caption">
            Example of Card Components
          </div>
        </div>
      </div>
  );
}

export default DesignSystem;
