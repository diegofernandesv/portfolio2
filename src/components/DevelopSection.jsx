import './DevelopSection.css';
import AnimatedContent from './AnimatedContent';

function DevelopSection() {
  return (
    <AnimatedContent>
      <div className="develop-section">
        <div className="develop-description">
          [Develop] In this phase, we transformed our research insights into
          design concepts, creating sketches, wireframes, and prototypes for
          testing and iteration.
        </div>
        <div className="develop-content">
          <div className="develop-top-row">
            <div className="sketch-container">
              <div className="content-title">Example of a sketch</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/f74385e548a071857e364a95d267dec61db9c87a?placeholderIfAbsent=true"
                alt="Example of a sketch"
                className="sketch-image"
              />
            </div>
            <div className="moodboard-container">
              <div className="content-title">Moodboard</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/b07a7d8e75cbfa6aa68b5e68511f4e62cc11efdf?placeholderIfAbsent=true"
                alt="Moodboard"
                className="moodboard-image"
              />
            </div>
          </div>
          <div className="inspiration-container">
            <div className="content-title">Inspiration board</div>
            <img
              src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/28b808d92894d9870533bd923d4f89880134b599?placeholderIfAbsent=true"
              alt="Inspiration board"
              className="inspiration-image"
            />
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}

export default DevelopSection;
