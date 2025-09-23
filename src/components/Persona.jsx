import './Persona.css';
import AnimatedContent from './AnimatedContent';

function Persona() {
  return (
      <div className="persona-section">
        <div className="persona-container">
          <div className="persona-description">
            [ Define ] In this phase, we defined the core challenges identified in
            our research and outline the requirements for a solution that improves
            the game-finding experience at Spilcaféen.
          </div>
          <div className="persona-content">
            <div className="persona-title">
              Persona
            </div>
            <div className="persona-text">
              From our target group research, we developed a user persona to
              summarize key user characteristics.
            </div>
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/1efb63a8ffec610004429fed6ee883807c54fdf0?placeholderIfAbsent=true"
          alt="User persona"
          className="persona-image"
        />
      </div>
  );
}

export default Persona;
