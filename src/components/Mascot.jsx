import './Mascot.css';
import AnimatedContent from './AnimatedContent';

function Mascot() {
  return (
    <AnimatedContent>
      <div className="mascot-section">
        <div className="mascot-content">
          <div className="mascot-header">
            <div className="mascot-title">
              Mascot
            </div>
            <div className="mascot-description">
              <div className="mascot-text">
                We created an old-school dice mascot inspired by "Cuphead" and vintage cartoons, designed to reflect Spilcaféen's theme and bring a fun, memorable touch to the prototype.
              </div>
              <div className="mascot-credits">
                Credits to : Agata Popek &amp; Gabriela Wozniak
              </div>
            </div>
          </div>
          <div className="mascot-images">
            <div className="mascot-sketch-container">
              <div className="mascot-sketch-title">Mascot Sketch</div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/bf068820a0146829d6f6660b0a2a3b7abff7795d?width=790" 
                alt="Mascot Sketch" 
                className="mascot-sketch-image"
              />
            </div>
            <div className="mascot-final-container">
              <div className="mascot-final-title">Mascot Final Result</div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/da7ab370c3b98f6abd2a09b932fbde6b2283fc0e?width=800" 
                alt="Frame 654" 
                className="mascot-final-image"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}

export default Mascot;
