import React from 'react';
import './TrailboundBrandGuide.css';
import videoTrailbound from '../../assets/videoTrailbound.mp4';
import AnimatedContent from '../AnimatedContent';

function TrailboundBrandGuide() {
  return (
    <div className="trailbound-brand-guide">
      <AnimatedContent>
      {/* Logomark Section */}
      <div className="section logomark-section">
        <div className="section-content logomark-content">
          <div className="logomark-left">
            <div className="heading-container">
              <div className="main-heading">
                Logomark
              </div>
              <div className="heading-divider" />
            </div>
            <div className="logo-symbol">
              <div className="symbol-text">
                t + b +
              </div>
              <div className="symbol-icon">
                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10.0532L4.29948 0L9.10478 10.0532L13.4043 2.98188L17.8723 10.0532H9.10478H0Z" fill="#2B4B30"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="description-container">
            <div className="description-text">
              The Trailbound logomark unites the letter "t" from Trail and "b" from Bound into a single, bold symbol. Its upward peaks are inspired by the form of a mountain, reflecting our brand's spirit of adventure and exploration.
            </div>
            <div className="description-text">
              This design embodies the balance between functionality and style, serving as a visual reminder of the journeys and challenges that shape the Trailbound identity.
            </div>
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ca9e29f4a6e453d461ba232f97a9633dd21aa97d?width=2900"
          alt="Trailbound logomark examples"
          className="section-image"
        />
      </div>
      </AnimatedContent>

      {/* Logotype Section */}
      <AnimatedContent>
      <div className="section logotype-section">
        <div className="logotype-content">
          <div className="main-heading">
            Logotype
          </div>
          <div className="description-text">
            The Hanken Grotesk Black Italic logotype reflects Trailbound's spirit with a bold, modern edge. Its sleek and sophisticated form conveys both strength and style, perfectly aligning with the brand's adventurous identity.
          </div>
          <div className="description-text">
            The logotype employs a -5% letter spacing, giving the typography a tighter and more cohesive appearance. This subtle adjustment enhances readability while adding a sense of precision and modern refinement to the brand's visual identity.
          </div>
          <div className="heading-divider logotype-divider" />
        </div>
        <div className="logotype-image-container">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/163d09123fafd4e5c6928b0129c5d9a69eb3bebb?width=1498"
            alt="Trailbound logotype"
            className="logotype-image"
          />
        </div>
      </div>
      </AnimatedContent>

      {/* Clear Space Section */}
      <AnimatedContent>
      <div className="section clearspace-section">
        <div className="clearspace-content">
          <div className="main-heading">
            Clear space
          </div>
          <div className="description-text">
            The combination of the logomark and logotype creates a strong, unified identity for Trailbound. Together, they ensure consistency and recognition across all applications, reinforcing the brand's dedication to quality and exploration.
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/bf815edcbb7065ff7529cdad3bd27c65162263dc?width=2880"
          alt="Clear space guidelines"
          className="section-image clearspace-image"
        />
      </div>
      </AnimatedContent>

      {/* Common Mistakes Section */}
      <AnimatedContent>
      <div className="section mistakes-section">
        <div className="mistakes-content">
          <div className="main-heading">
            common mistakes
          </div>
          <div className="description-text">
            To maintain a consistent and professional brand identity, it is essential that the Trailbound logo is always used correctly. Any modifications—such as changing colors, proportions, fonts, or placements—can weaken recognition and dilute the brand's impact. The following examples illustrate common mistakes that must be avoided.
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/7ebd006b258f2076a2600dd93bec0b466c98145f?width=2043"
          alt="Common mistakes examples"
          className="section-image"
        />
      </div>
      </AnimatedContent>

      {/* Color Palette Section */}
      <AnimatedContent>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/45301ea72838fe3c05b9c189343edf21cf74457c?width=2880"
        alt="Color palette"
        className="section-image color-palette-image"
      />
      </AnimatedContent>

      {/* Combinations Section */}
      <div className="section combinations-section">
        <div className="combinations-header">
          <div className="heading-container">
            <div className="main-heading" style={{ marginLeft: 16 }}>
              Combinations
            </div>
            <div className="heading-divider" />
          </div>
          <div className="description-text">
            The consistent use of color is vital to effective brand recognition. Trailbound should always be represented in one of the colors on this page, aside from specific recommendations within this guide.
          </div>
        </div>
        <div className="combinations-grid">
          <div className="combination-row">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/337b43ce7ba3fe550f2b930270976754c9715a2d?width=1394"
              alt="Logo combination example 1"
              className="combination-item"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d53590e0753c51dc0305c726cb167354bf8deb09?width=1394"
              alt="Logo combination example 2"
              className="combination-item"
            />
          </div>
          <div className="combination-row">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d9a0b5a6e6985c0cb5a67440c15fe0fe692972e1?width=1386"
              alt="Logo combination example 3"
              className="combination-item"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1d69a849a1e87b122101ed2b0feb170d045ac325?width=1386"
              alt="Logo combination example 4"
              className="combination-item"
            />
          </div>
          <div className="combination-row">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/55e030d9c6ca533fc1c5a42490cd464279309f63?width=1386"
              alt="Logo combination example 5"
              className="combination-item"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/951262c17935af02718ddcc168240bf27d116704?width=1386"
              alt="Logo combination example 6"
              className="combination-item"
            />
          </div>
        </div>
      </div>

      {/* Typeface Section */}
      <div className="section typeface-section">
        <div className="typeface-content">
          <div className="heading-container">
            <div className="main-heading">
              typeface
            </div>
            <div className="heading-divider" />
          </div>
          <div className="description-text">
            Hanken Grotesk is Trailbound's primary typeface. Its clean, modern, and highly legible design reflects the brand's balance of strength and simplicity.
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6e68a119bfe2368b1d1f45f9f9fa7b9ed0ea6e56?width=2048"
          alt="Hanken Grotesk typeface examples"
          className="section-image"
        />
      </div>

      {/* Instagram Post Section */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8d16c3bb820632f387ddb7542d2631ca8bd73818?width=3024"
        alt="Instagram post example"
        className="section-image instagram-image"
      />

      {/* Shopify Website Section */}
      <div className="section shopify-section">
        <div className="heading-container">
          <div className="main-heading">
            Shopify Website
          </div>
          <div className="heading-divider" />
        </div>
        <video
          className="shopify-video"
          src={videoTrailbound}
          controls
          playsInline
          muted
        />
      </div>
    </div>
  );
}

export default TrailboundBrandGuide;
