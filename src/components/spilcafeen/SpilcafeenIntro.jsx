import './SpilcafeenIntro.css';

function SpilcafeenIntro() {
  return (
    <div className="spilcafeen-intro">
      <div className="spilcafeen-intro-container">
        <div className="spilcafeen-intro-header">
          <div className="spilcafeen-intro-step">
            <div>1</div>
          </div>
          <div className="spilcafeen-intro-title">
            Intro
          </div>
        </div>
        <div className="spilcafeen-intro-content">
          <div className="spilcafeen-intro-details">
            <div className="spilcafeen-intro-detail-item">
              <div className="spilcafeen-intro-detail-text">
                Client : Spilcafeen
              </div>
            </div>
            <div className="spilcafeen-intro-detail-item">
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/8ad66c94b9b2c25a3c52482931e21c9eb25239c4?placeholderIfAbsent=true"
                className="spilcafeen-intro-detail-icon duration"
                alt=""
              />
              <div className="spilcafeen-intro-detail-text">
                Duration : 4 weeks
              </div>
            </div>
            <div className="spilcafeen-intro-detail-item">
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/24bb49a0743fdfd039c28bc04c4153694f288cb0?placeholderIfAbsent=true"
                className="spilcafeen-intro-detail-icon team"
                alt=""
              />
              <div className="spilcafeen-intro-detail-text">
                Team : 4 people
              </div>
            </div>
            <div className="spilcafeen-intro-detail-item">
              <div className="spilcafeen-intro-detail-text">
                Made in Feb. 2025
              </div>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/1d6be0a1a38aa347783d64102f3226ea4bf481ab?placeholderIfAbsent=true"
              className="spilcafeen-intro-logo"
              alt=""
            />
          </div>
          <div className="spilcafeen-intro-description">
            Spilcaféen is a Danish board game café chain with a huge
            collection of games. For many guests, the experience of choosing
            what to play was overwhelming due to lack of structured
            information, while the café's existing website only provided shelf
            numbers.
            <br />
            <br />
            Our{" "}
            <span className="spilcafeen-intro-challenge">
              challenge
            </span>{" "}
            was to design a digital solution that makes game discovery simple,
            fun, and stress-free. <br />
            <br />
            By applying a structured UX research and design process, we
            created a digital solution that simplified game discovery, reduced
            choice overload, and delivered a fun, inviting experience aligned
            with Spilcaféen's cozy café atmosphere.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpilcafeenIntro;
