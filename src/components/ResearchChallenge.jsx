import './ResearchChallenge.css';

function ResearchChallenge() {
  return (
    <div className="research-challenge-section">
      <div className="research-challenge-content">
        <div className="research-challenge-header">
          <h2 className="research-challenge-title">
            Research & Defining the challenge
          </h2>
          <div className="research-challenge-description">
            We began by studying the museum and its visitors through desk
            research, netnography, field observations, and interviews with young
            adults.
            <br />
            <br />
            <br /> Key findings:
            <br />
            Families and children were well served; adults were less engaged.
            <br />
            Interactive elements (Oops! exhibition, curved screen) stood out as
            most successful.
            <br />
            Visitors often felt unsure about whether screens were interactive.
            <br />
            Young adults wanted museums to feel immersive, playful, and personally
            relevant.
            <br />
            <br />
            <br />
            These insights framed our design challenge: create a digital layer
            that is clear, interactive, and reflective to better engage adult
            visitors.
          </div>
        </div>
        
        <div className="research-images-section">
          <div className="research-images-grid">
            <div className="research-image-item">
              <img
                src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/cd562038051a115e6a02956246790bf03387d73a?placeholderIfAbsent=true"
                alt="Field observations findings"
                className="research-image"
              />
              <div className="research-image-caption">
                Main findings from Field Observations
              </div>
            </div>
            <div className="research-image-item">
              <img
                src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/d813598e03e065ef286f3b473bd27e2c6782022e?placeholderIfAbsent=true"
                alt="Netnography research"
                className="research-image"
              />
              <div className="research-image-caption">
                Netnography
              </div>
            </div>
          </div>
          
          <div className="interview-guide-section">
            <img
              src="https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/5856b6eb96784917e577c725581c39eb02326e94?placeholderIfAbsent=true"
              alt="Interview guide"
              className="interview-guide-image"
            />
            <div className="interview-guide-caption">
              Interview Guide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchChallenge;
