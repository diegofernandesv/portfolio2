import './ConceptExperienceDesign.css';
import AnimatedContent from './AnimatedContent';

function ConceptExperienceDesign() {
  return (

      <div className="concept-experience-section">
        <div className="concept-content-wrapper">
          <div className="concept-header">
            <h2 className="concept-title">
              Concept & Experience Design
            </h2>
            <div className="concept-description">
              <p className="concept-intro-text">
                Using mappings (Affinity Diagram, Persona, Value Proposition Canvas,
                How Might We, User Stories & User Story Map), we shaped The
                Spotlight.
              </p>
              <div className="concept-main-content">
                <div className="concept-text-content">
                  <p>
                    Inside, visitors encounter three interactive screens:
                    <br />
                    <br />
                    Testimony Screen – short video clips where real Danes share
                    personal reflections on nature, climate, or sustainability. These
                    authentic voices create empathy and make the topics feel relevant.
                    <br />
                    <br />
                    Context & Presence Screen – a central screen that explains the
                    booth's purpose while displaying a mirrored, abstract animation of
                    the visitor. This establishes presence and subtly reminds them
                    that they are part of the bigger story.
                    <br />
                    <br />
                    3. Quiz Screen – a short, interactive quiz with
                    thought-provoking questions connected to the exhibition. Answer
                    options are neutral, avoiding "right or wrong," and instead
                    connect to personal values.
                  </p>
                </div>
                <div className="concept-image-wrapper">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/67ea7cd8aa6865a40e749e8c113b07e1368b6924?placeholderIfAbsent=true"
                    alt="Interactive screens demonstration"
                    className="concept-main-image"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="concept-gallery-section">
            <div className="concept-image-gallery">
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/153c3d27f8b45f5cd1c121db48e748bea03538f3?placeholderIfAbsent=true"
                alt="Interactive screen interface 1"
                className="gallery-image"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/2acac3db03a80f63912d9acc37341a9285c26a12?placeholderIfAbsent=true"
                alt="Interactive screen interface 2"
                className="gallery-image"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/8d72ff88a59b9395b2954a0a668d3ab6a1dce52c?placeholderIfAbsent=true"
                alt="Interactive screen interface 3"
                className="gallery-image"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/a75730ed064c53c2af36d4aef6ea0ebd66f789f3?placeholderIfAbsent=true"
                alt="Interactive screen interface 4"
                className="gallery-image"
              />
            </div>
            <p className="concept-conclusion-text">
              At the end, visitors receive a Spotlight Wrapper — a personalized
              reflection summary based on their answers. This includes a short
              description of their "profile" and the option to take a picture
              combined with their results, designed in a shareable, story-like
              format for social media.
            </p>
          </div>
          
          <div className="concept-final-images">
            <img
              src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/950be6930a9d9d2acd3226821dea0fda9226a185?placeholderIfAbsent=true"
              alt="Spotlight wrapper mobile interface"
              className="final-image-mobile"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/84e3953974e35e757dcd694c5bdc10a9ba66b7a3?placeholderIfAbsent=true"
              alt="Spotlight wrapper desktop interface"
              className="final-image-desktop"
            />
          </div>
        </div>
      </div>
  );
}

export default ConceptExperienceDesign;
