import './FieldResearch.css';
import AnimatedContent from './AnimatedContent';

function FieldResearch() {
  return (
      <div className="field-research-section">
        <div className="field-research-content">
          <div className="field-research-text">
            <div className="field-research-title">
              Field Research
            </div>
            <div className="field-research-description">
              To ensure that we meet our user's needs, we began our research by
              immersing ourselves in the customer experience at Spilcafeen. We
              visited the café, played games, and observed how other customers
              interacted with the space
            </div>
          </div>
        </div>
        <div className="field-research-image">
          <img
            src="https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/36e609a6695bcec91f7f75989465dcc8547db1d5?placeholderIfAbsent=true"
            alt="Field research at Spilcafeen"
            className="research-image"
          />
        </div>
      </div>
  );
}

export default FieldResearch;
