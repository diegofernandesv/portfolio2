import React from "react";
import "./TakeAways.css";
import AnimatedContent from "./AnimatedContent";

function TakeAways() {
  return (
    <div className="takeaways-container">
      <div className="takeaways-content">
        <div className="takeaways-section">
          <h2 className="takeaways-title">
            Take Aways
          </h2>
          <p className="takeaways-text">
            Working on Spilcaféen as a team project gave me valuable experience
            with the full UX/UI process—research, wireframing, testing
            prototypes, and building a design system. Collaborating under
            deadlines taught me the importance of clear communication and
            adaptability.
            <br />
            <br />
            My contributions included research, wireframes, UI elements, and
            system design, while also exploring how playful details like a
            mascot can strengthen brand identity. Even though our testing was
            limited, the process of iterating together and seeing our ideas
            evolve into a functional prototype was incredibly rewarding.
          </p>
        </div>
        <div className="prototype-section">
          <h2 className="prototype-title">
            Want to see the full solution?
          </h2>
          <button className="prototype-button">
            Check the Figma Prototype
          </button>
        </div>
      </div>
    </div>
  );
}

export default TakeAways;
