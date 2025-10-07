import { useNavigate } from 'react-router-dom';
import './TrailboundIntro.css';

function TrailboundIntro() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/projects');
  };

  return (
    <div className="trailbound-intro">
      <div className="trailbound-intro-hero">
        <img
          src="https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/9028199afb8dc40e1ce83f8ded9b492d40047bb3?placeholderIfAbsent=true"
          className="trailbound-intro-hero-image"
          alt=""
        />
        <div className="trailbound-intro-container">
          <button className="go-back-button trailbound-go-back" onClick={handleGoBack}>
            Go back
          </button>
          <div className="trailbound-intro-content">
            <div className="trailbound-intro-header">
              <div className="trailbound-intro-step">
                <div>1</div>
              </div>
              <div className="trailbound-intro-title">
                Intro
              </div>
            </div>
            <div className="trailbound-intro-main">
              <div className="trailbound-intro-details">
                <div className="trailbound-intro-detail-item">
                  <div className="trailbound-intro-detail-text">
                    Client : Trailbound
                  </div>
                </div>
                <div className="trailbound-intro-detail-item">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/f566a8811c31363357c4ad4a2977c109a71711bc?placeholderIfAbsent=true"
                    className="trailbound-intro-detail-icon"
                    alt=""
                  />
                  <div className="trailbound-intro-detail-text">
                    Duration : 3 weeks
                  </div>
                </div>
                <div className="trailbound-intro-detail-item">
                  <div className="trailbound-intro-detail-text">
                    Made in Aug. 2025
                  </div>
                </div>
                <div className="trailbound-intro-logo">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d5b63ce097f3ea7929d170a67251cc688dd7745e?placeholderIfAbsent=true"
                    alt="Trailbound logo"
                  />
                </div>
              </div>
              <div className="trailbound-intro-description">
                Trailbound is a self-created outdoor lifestyle brand that
                combines functionality and style, offering durable gear designed
                for both adventure and everyday wear.
                <br />
                <br />
                For this assignment, I developed the brand entirely from scratch
                — including the visual identity, brand guidelines, and a fully
                designed Shopify e-commerce website. My goal was to build a
                brand that feels authentic, consistent, and engaging, while
                showing how design can connect lifestyle storytelling with
                digital retail.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="trailbound-intro-showcase">
        <img
          src="https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d4e247a30934798861c24f51e46df84bfe103adf?placeholderIfAbsent=true"
          className="trailbound-intro-showcase-image"
          alt="Trailbound showcase"
        />
        <div className="trailbound-intro-cards">
          <div className="trailbound-intro-card trailbound-intro-card-tone">
            <div className="trailbound-intro-card-content">
              <div className="trailbound-intro-card-title">
                TONE OF VOICE
              </div>
              <div className="trailbound-intro-card-text">
                <span className="trailbound-intro-brand-name">Trailbound </span>
                speaks with an adventurous, confident, and approachable voice.
                We inspire people to explore by using clear, energetic, and
                motivating language that feels authentic and down-to-earth.
                Our tone balances practical guidance with a sense of
                excitement and discovery, making outdoor exploration feel both
                accessible and aspirational.
              </div>
            </div>
          </div>
          <div className="trailbound-intro-card trailbound-intro-card-vision">
            <div className="trailbound-intro-card-content">
              <div className="trailbound-intro-card-section">
                <div className="trailbound-intro-card-title">
                  AIM
                </div>
                <div className="trailbound-intro-card-text">
                  Our aim is to provide functional, stylish gear that inspires
                  adventure in both the outdoors and everyday life.
                </div>
              </div>
              <div className="trailbound-intro-card-section">
                <div className="trailbound-intro-card-title">
                  VISION
                </div>
                <div className="trailbound-intro-card-text">
                  Our vision is to become a trusted global outdoor lifestyle
                  brand that empowers people to embrace adventure, connect with
                  nature, and carry the spirit of exploration into their daily
                  lives.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrailboundIntro;
