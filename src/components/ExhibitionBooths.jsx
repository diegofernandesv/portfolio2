import './ExhibitionBooths.css';
import AnimatedContent from './AnimatedContent';

function ExhibitionBooths() {
  return (
      <div className="exhibition-booths-section">
        <div className="booths-content-wrapper">
          <div className="booths-section">
            <div className="booth-content-block">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/149997de93971a5ffec5b9949db4a382aa25c73e"
                alt="Exhibition booth setup with multiple interactive screens"
                className="booth-main-image"
              />
              <div className="booth-description">
                The booths are flexible: they can be placed across multiple exhibitions, each tailored with unique testimonies and quiz content. For limited resources, we also suggested a minimum viable version using three tablets with a spotlight and signage to capture the same essence at lower cost.
              </div>
            </div>
            <div className="booth-values-block">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8befbb689b111888486614e1f52ecec6410a9d6d"
                alt="Four core values diagram showing empathy, engagement, awareness, and authenticity"
                className="values-image"
              />
              <div className="values-description">
                The concept was guided by four values: empathy, engagement, awareness, and authenticity — ensuring every interaction felt meaningful rather than didactic.
              </div>
            </div>
          </div>
          <div className="booth-gallery-section">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5aba2ab650e0b2b19acb0febb7d809ce710dd285"
              alt="Wide view of exhibition booth placement in museum space"
              className="gallery-wide-image"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/61030f735f297a53cbf312a14313fdfbeda78f0f"
              alt="Detailed view of booth interaction interface"
              className="gallery-detail-image"
            />
          </div>
        </div>
      </div>
  );
}

export default ExhibitionBooths;
