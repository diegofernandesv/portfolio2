import './SpilcafeenHiFiMascot.css';
import videospilcafeen from '../../assets/videospilcafeen.mov';

function SpilcafeenHiFiMascot() {
  return (
    <div className="spilcafeen-hifi-mascot">
      <div className="spilcafeen-hifi-mascot-container">
        <div className="spilcafeen-hifi-mascot-content">
          <div className="spilcafeen-hifi-mascot-left">
            <div className="spilcafeen-hifi-mascot-section">
              <div className="spilcafeen-hifi-mascot-header">
                <div className="spilcafeen-hifi-mascot-step">
                  <div>12</div>
                </div>
                <div className="spilcafeen-hifi-mascot-title">
                  Hi-fi
                </div>
              </div>
              <div className="spilcafeen-hifi-mascot-description">
                Using the design system as a foundation, we developed high-fidelity
                prototypes in Figma. The hi-fi designs focused on creating a cozy,
                playful atmosphere with clear typography, warm colors, and
                consistent UI elements. We also introduced the dice mascot and a
                game recommendation quiz to make the experience more engaging and
                user-friendly.
              </div>
            </div>
            
            <div className="spilcafeen-hifi-mascot-section">
              <div className="spilcafeen-hifi-mascot-header">
                <div className="spilcafeen-hifi-mascot-step">
                  <div>13</div>
                </div>
                <div className="spilcafeen-hifi-mascot-title">
                  Mascot
                </div>
              </div>
              <div className="spilcafeen-hifi-mascot-description">
                We created an old-school dice mascot inspired by "Cuphead" and
                vintage cartoons, designed to reflect Spilcaféen's theme and bring
                a fun, memorable touch to the prototype.
                <br />
                <br />
                Credits to : Agata Popek & Gabriela Wozniak
              </div>
              <div className="spilcafeen-hifi-mascot-images">
                <div className="spilcafeen-hifi-mascot-image-container">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/ba7b3feeabe01cfee1d9d635468fe141ca172c41?placeholderIfAbsent=true"
                    className="spilcafeen-hifi-mascot-image"
                    alt="Dice mascot design"
                  />
                </div>
                <div className="spilcafeen-hifi-mascot-image-container">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/e90a7df626647233678a39bf4f22e54fab07488e?placeholderIfAbsent=true"
                    className="spilcafeen-hifi-mascot-image"
                    alt="Mascot variations"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="spilcafeen-hifi-mascot-right">
            <video
              src={videospilcafeen}
              className="spilcafeen-hifi-mascot-main-image"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpilcafeenHiFiMascot;
