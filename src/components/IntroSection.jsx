import './IntroSection.css';
import AnimatedContent from './AnimatedContent';

function IntroSection() {
  return (
    <AnimatedContent>
      <div className="intro-section">
        <div className="intro-content">
          <div className="intro-title-section">
            <div className="intro-title">
              Intro
            </div>
            <div className="intro-text-container">
              <div className="intro-description">
                Spilcaféen is a Danish board game café chain with a huge
                collection of games. For many guests, the experience of choosing
                what to play was overwhelming due to lack of structured
                information, while the café's existing website only provided shelf
                numbers.
                <br />
                <br />
                Our challenge was to design a digital solution that makes game discovery simple,
                fun, and stress-free.
              </div>
            </div>
          </div>
          <div className="intro-solution-section">
            <div className="intro-solution">
              By applying a structured UX research and design process, we created
              a digital solution that simplified game discovery, reduced choice
              overload, and delivered a fun, inviting experience aligned with
              Spilcaféen's cozy café atmosphere.
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}

export default IntroSection;
