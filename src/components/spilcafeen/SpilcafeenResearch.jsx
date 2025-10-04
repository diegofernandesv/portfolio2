import './SpilcafeenResearch.css';

function SpilcafeenResearch() {
  return (
    <div className="spilcafeen-research">
      {/* Field Research Section */}
      <div className="spilcafeen-research-field">
        <div className="spilcafeen-research-field-content">
          <div className="spilcafeen-research-field-header">
            <div className="spilcafeen-research-step">
              <div>3</div>
            </div>
            <div className="spilcafeen-research-step-title">
              Field Research
            </div>
          </div>
          <div className="spilcafeen-research-field-description">
            To ensure that we meet our user's needs, we began our research by
            immersing ourselves in the customer experience at Spilcafeen. We
            visited the café, played games, and observed how other customers
            interacted with the space
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/3931e6e2a67c2810886b32f6fa83c708f2582a88?placeholderIfAbsent=true"
          className="spilcafeen-research-field-image"
          alt="Field research at Spilcafeen"
        />
      </div>

      {/* Desk Research Section */}
      <div className="spilcafeen-research-desk">
        <div className="spilcafeen-research-desk-header">
          <div className="spilcafeen-research-step">
            <div>4</div>
          </div>
          <div className="spilcafeen-research-step-title">
            Desk Research
          </div>
        </div>
        <div className="spilcafeen-research-desk-content">
          <div className="spilcafeen-research-desk-text">
            Through our desk research, we analyzed reports, forums, and
            applied netnography to understand Spilcaféen's target audience.
            We found that the core users are young adults (18–34), both men
            and women, including students, young professionals, and
            families, within an international and multicultural environment.
          </div>
          <div className="spilcafeen-research-desk-text">
            By reviewing community discussions, we uncovered key
            psychographic insights, such as the value users place on social
            interaction, fun, and technology detox. Altogether, this
            research highlighted the importance of designing a fast and
            intuitive way to find games, while supporting the social and
            relaxed environment that users seek.
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/fb984aac7432e112ab7503f04e1e36963dafcb8e?placeholderIfAbsent=true"
          className="spilcafeen-research-desk-image"
          alt="Desk research data and insights"
        />
      </div>
    </div>
  );
}

export default SpilcafeenResearch;
