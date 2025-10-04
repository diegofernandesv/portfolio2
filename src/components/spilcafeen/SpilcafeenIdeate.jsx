import './SpilcafeenIdeate.css';

function SpilcafeenIdeate() {
  return (
    <div className="spilcafeen-ideate">
      <div className="spilcafeen-ideate-container">
        <div className="spilcafeen-ideate-content">
          <div className="spilcafeen-ideate-description">
            We transformed our research insights into design concepts, creating
            sketches, wireframes, and prototypes for testing and iteration.
          </div>
          <div className="spilcafeen-ideate-gallery">
            <div className="spilcafeen-ideate-top-row">
              <div className="spilcafeen-ideate-sketch-section">
                <div className="spilcafeen-ideate-label">
                  Example of a sketch
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2c9bd9fd47eea66e0d036f9ed52989624d21c90f?width=726"
                  alt="Design sketch example"
                  className="spilcafeen-ideate-sketch-image"
                />
              </div>
              <div className="spilcafeen-ideate-moodboard-section">
                <div className="spilcafeen-ideate-label">
                  Moodboard
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f09f7a300b2ecb9f341b082cbbec1f568d22c421?width=1908"
                  alt="Design moodboard"
                  className="spilcafeen-ideate-moodboard-image"
                />
              </div>
            </div>
            <div className="spilcafeen-ideate-inspiration-section">
              <div className="spilcafeen-ideate-label">
                Inspiration board
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f087032828a70f050e69233637b3649a4d6bdd5f?width=2768"
                alt="Inspiration board"
                className="spilcafeen-ideate-inspiration-image"
              />
            </div>
          </div>
        </div>
        <div className="spilcafeen-ideate-design-system">
          <div className="spilcafeen-ideate-header">
            <div className="spilcafeen-ideate-step">
              <div>11</div>
            </div>
            <div className="spilcafeen-ideate-title">
              Design System
            </div>
          </div>
          <div className="spilcafeen-ideate-design-description">
            Building on our lo-fi wireframes, we created a design system in
            Figma to bring structure and consistency to the hi-fi prototype. It
            defined colors, typography, grids, and reusable UI components, all
            aligned with Spilcaféen's cozy and playful brand identity.
          </div>
        </div>
        <div className="spilcafeen-ideate-design-gallery">
          <div className="spilcafeen-ideate-design-top-row">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8853ccb695c8867b957bd1cad9f85576f1340730?width=2032"
              alt="Typography design system"
              className="spilcafeen-ideate-typography-image"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/09dbdc7c78df4df70c7f289133f4fdd2437f0202?width=618"
              alt="Color design system"
              className="spilcafeen-ideate-colors-image"
            />
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/63a720d208aee5c62c4aa2a42a19783f768de416?width=2706"
            alt="Illustrations design system"
            className="spilcafeen-ideate-illustrations-image"
          />
        </div>
      </div>
    </div>
  );
}

export default SpilcafeenIdeate;
