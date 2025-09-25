import React from "react";
import SplitText from "./SplitText";
import imageDiego from "../assets/firstdesign.jpg";
import AnimatedContent from "./AnimatedContent";

function DesignJourney() {
  return (
    <>
      <style>{`
        /* Keep paragraph color consistent even with SplitText spans */
        .design-journey-paragraph,
        .design-journey-paragraph .split-word,
        .design-journey-paragraph .split-char,
        .design-journey-paragraph * { color: #000 !important; }

        @media (max-width: 768px) {
          .design-journey-container {
            /* Show image first, then text on mobile */
            flex-direction: column-reverse !important;
            gap: 2rem !important;
            padding: 2rem 1.25rem !important;
          }
          .design-journey-text {
            width: 90vw !important;
            max-width: 600px !important;
          }
          .design-journey-image-container {
            width: 100% !important;
            height: auto !important;
            max-width: 300px !important;
            min-height: 250px !important;
          }
        }
        @media (max-width: 640px) {
          .design-journey-container {
            gap: 1.25rem !important;
            padding: 1.25rem 1rem !important;
          }
          /* Use same mobile sizing philosophy as SkiperIntro (handled via clamp below) */
          .design-journey-image-container {
            padding: 1rem 1.25rem !important;
            min-height: 250px !important;
          }
          .design-journey-badge-text {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
      
      <div
        className="design-journey-container"
        style={{
          display: 'flex',
          gap: '3.5rem',
          alignItems: 'center',
          padding: '2.5rem 1.25rem',
          margin: '0 auto',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        <div
          className="design-journey-text"
          style={{
            fontSize: 'clamp(16px, 2.6vw, 20px)',
            lineHeight: 1.5,
            color: 'black',
            width: '600px'
          }}
        >
          <SplitText
            text={
              'My design journey began during the pandemic when I wanted graphics for my sports Instagram. After my brother got me a Domestika course, I started experimenting in Photoshop and eventually sold my first design for $3. That small step sparked my passion and led me to where I am now — creating user-centered designs that are simple, engaging, and original. At Business Academy Aarhus, I also discovered how much I enjoy combining design with coding — building websites, apps, and interactive experiences that bring ideas to life.'
            }
            className="design-journey-paragraph"
            delay={50}
            duration={0.55}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.15}
            rootMargin="-80px"
            textAlign="left"
          />
        </div>
          
        <div
          className="design-journey-image-container"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '1.5rem',
            height: '465px',
            width: '469px',
            overflow: 'hidden'
          }}
        >
          <AnimatedContent>
          {/* Overlay badge on top of the image */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              backgroundColor: 'rgba(255,255,255,0.95)',
              borderRadius: '0.5rem',
              padding: '1rem 1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
          >
            <div className="design-journey-badge-text" style={{ fontSize: '16px', color: 'black', lineHeight: '1rem' }}>
              One of my first designs :)
            </div>
          </div>
          
          <img
            src={imageDiego}
            alt="One of my first designs"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '1rem'
            }}
          />
          </AnimatedContent>
        </div>
      </div>
    </>
  );
}

export default DesignJourney;
