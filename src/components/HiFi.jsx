import './HiFi.css';
import AnimatedContent from './AnimatedContent';

function HiFi() {
  return (
      <div className="hifi-section">
        <div className="hifi-container">
          <div className="hifi-header">
            <div className="hifi-title">
              Hi-fi
            </div>
            <div className="hifi-description">
              Using the design system as a foundation, we developed high-fidelity
              prototypes in Figma. The hi-fi designs focused on creating a cozy,
              playful atmosphere with clear typography, warm colors, and
              consistent UI elements. We also introduced the dice mascot and a
              game recommendation quiz to make the experience more engaging and
              user-friendly.
            </div>
          </div>
          <div className="hifi-images-grid">
            <div className="hifi-column-left">
              <img
                src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/60f8b1269a341c002c4b7a9440900c77661bf5c0?placeholderIfAbsent=true"
                alt="Hi-fi prototype 1"
                className="hifi-image-vertical"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/340fc66fd087386119ec830b12e14b4d59e0d8c9?placeholderIfAbsent=true"
                alt="Hi-fi prototype 2"
                className="hifi-image-vertical-small"
              />
            </div>
            <div className="hifi-column-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/bff7323b3772287a225338b74c3508dee3de770c?placeholderIfAbsent=true"
                alt="Hi-fi prototype 3"
                className="hifi-image-vertical-center"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/5f4d6408f2d051848b059e688f3dfacf9a90f587?placeholderIfAbsent=true"
                alt="Hi-fi prototype 4"
                className="hifi-image-center-small"
              />
            </div>
            <div className="hifi-column-right">
              <img
                src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/31bcc8f087205f0228361e305a3663701aaec5b7?placeholderIfAbsent=true"
                alt="Hi-fi prototype 5"
                className="hifi-image-tall"
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default HiFi;
