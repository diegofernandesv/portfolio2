import './LoFi.css';
import AnimatedContent from './AnimatedContent';

function LoFi() {
  return (
    <AnimatedContent>
      <div className="lofi-section">
        <div className="lofi-header">
          <div className="lofi-title">
            Lo-fi
          </div>
          <div className="lofi-description">
            We created low-fidelity wireframes in Figma to test layouts and
            navigation. Guided by UX laws like Hick's, Miller's, and Jacob's, the
            wireframes focused on simplicity, clarity, and reducing choice
            overload.
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/55dfe55b38db59df50f18a6f19a03edc5a45cf6c?placeholderIfAbsent=true"
          alt="Low-fidelity wireframes"
          className="lofi-image"
        />
      </div>
    </AnimatedContent>
  );
}

export default LoFi;
