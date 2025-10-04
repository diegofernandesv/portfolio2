import './SpilcafeenDefinePhase.css';
import AnimatedContent from '../AnimatedContent';
import imageuserflow from '../../assets/userflow.png';
// TODO: separate this into components

function SpilcafeenDefinePhase() {
  return (
    <div className="spilcafeen-define-phase">
      <div className="spilcafeen-define-container">
        {/* Persona Section */}
        <AnimatedContent>
          <div className="spilcafeen-define-section">
            <div className="spilcafeen-define-section-content">
              <div className="spilcafeen-define-header">
                <div className="spilcafeen-define-step">
                  <div>5</div>
                </div>
                <div className="spilcafeen-define-title">
                  Persona
                </div>
              </div>
              <div className="spilcafeen-define-description">
                From our target group research, we developed a user persona to
                summarize key user characteristics.
              </div>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/893aa77c9eca7e99321ff4bd05884dfebf3699ad?placeholderIfAbsent=true"
              className="spilcafeen-define-image-full"
              alt="User persona diagram"
            />
          </div>
        </AnimatedContent>

        {/* Rich Picture Section */}
        <AnimatedContent>
          <div className="spilcafeen-define-section spilcafeen-define-section-large-margin">
            <div className="spilcafeen-define-section-horizontal">
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/680e0a6a90071140e4bac854828eca9cf49ecc88?placeholderIfAbsent=true"
                className="spilcafeen-define-image-left"
                alt="Rich picture analysis"
              />
              <div className="spilcafeen-define-content-right">
                <div className="spilcafeen-define-header">
                  <div className="spilcafeen-define-step">
                    <div>6</div>
                  </div>
                  <div className="spilcafeen-define-title">
                    Rich Picture
                  </div>
                </div>
                <div className="spilcafeen-define-description">
                  Using Rich Picture, we identified confusion in game
                  selection, issues with the digital system, and crowding,
                  while also highlighting the importance of community and
                  social interaction. These insights guided our OOUX tables
                  and user stories.
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* OOUX Section */}
        <AnimatedContent>
          <div className="spilcafeen-define-section spilcafeen-define-section-large-margin">
            <div className="spilcafeen-define-section-horizontal">
              <div className="spilcafeen-define-content-left">
                <div className="spilcafeen-define-header">
                  <div className="spilcafeen-define-step">
                    <div>7</div>
                  </div>
                  <div className="spilcafeen-define-title">
                    OOUX
                  </div>
                </div>
                <div className="spilcafeen-define-description">
                  We created OOUX tables to capture the key properties from
                  the rich picture, focusing on the game table as the most
                  important feature for Spilcaféen's customers.
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/1f50604dd088ca9d6d96ffc81171163233e79c58?placeholderIfAbsent=true"
                className="spilcafeen-define-image-right"
                alt="OOUX tables"
              />
            </div>
          </div>
        </AnimatedContent>

        {/* User Stories Section */}
        <AnimatedContent>
          <div className="spilcafeen-define-section spilcafeen-define-section-large-margin">
            <div className="spilcafeen-define-section-horizontal">
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/47acb8ba3421436796b0cb01aa9b69eec1c2f96b?placeholderIfAbsent=true"
                className="spilcafeen-define-image-left"
                alt="User stories diagram"
              />
              <div className="spilcafeen-define-content-right">
                <div className="spilcafeen-define-header">
                  <div className="spilcafeen-define-step">
                    <div>8</div>
                  </div>
                  <div className="spilcafeen-define-title">
                    User Stories
                  </div>
                </div>
                <div className="spilcafeen-define-description">
                  Guests need quick game search and recommendations, while
                  admins struggle with updating the site and poor usability.
                  These insights shaped our goal of creating an intuitive and
                  efficient solution.
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* User Story Map Section */}
        <AnimatedContent>
          <div className="spilcafeen-define-section spilcafeen-define-section-large-margin">
            <div className="spilcafeen-define-section-horizontal">
              <div className="spilcafeen-define-content-left spilcafeen-define-content-grow">
                <div className="spilcafeen-define-header">
                  <div className="spilcafeen-define-step">
                    <div>9</div>
                  </div>
                  <div className="spilcafeen-define-title">
                    User Story Map
                  </div>
                </div>
                <div className="spilcafeen-define-description">
                  We mapped user stories to visualize the journey,
                  prioritize features, and spot gaps. This showed the
                  solution must focus on seamless game discovery with
                  filters and clear information, which later informed our
                  sketches and user flows.
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/cc063cb7115aca88225b78c3a5a03f4ade433a9d?placeholderIfAbsent=true"
                className="spilcafeen-define-image-right spilcafeen-define-image-grow"
                alt="User story map"
              />
            </div>
          </div>
        </AnimatedContent>

        {/* User Flow Section */}
        <AnimatedContent>
          <div className="spilcafeen-define-section spilcafeen-define-section-large-margin">
            <div className="spilcafeen-define-flow-section">
              <div className="spilcafeen-define-header">
                <div className="spilcafeen-define-step">
                  <div>10</div>
                </div>
                <div className="spilcafeen-define-title">
                  User Flow
                </div>
              </div>
              <div className="spilcafeen-define-description spilcafeen-define-description-narrow">
                We created user flows to define the journey and ensure smooth
                navigation. This helped us identify key pages like game overview
                and filtering, guiding our sketches toward a clear and
                user-friendly design.
              </div>
            </div>

            <img
              src={imageuserflow}
              className="spilcafeen-user-flow-image"
              alt="User flow diagram"
            />
          </div>
        </AnimatedContent>

        {/* Card Sorting Test Section */}
        <AnimatedContent>
          <div className="spilcafeen-define-section spilcafeen-define-section-large-margin">
            <div className="spilcafeen-define-section-horizontal">
              <div className="spilcafeen-define-content-left spilcafeen-define-content-wide">
                <div className="spilcafeen-define-header">
                  <div className="spilcafeen-define-step">
                    <div>11</div>
                  </div>
                  <div className="spilcafeen-define-title">
                    Card Sorting Test
                  </div>
                </div>
                <div className="spilcafeen-define-description">
                  To validate our ideas, we conducted card sorting with 5 users.
                  They ranked game time, number of players, category, and shelf
                  location as the most important details. For filters, they
                  prioritized language, genre, players, and difficulty. These
                  insights guided the design of our game cards and filtering system.
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/445a1c88d8344406865ca6514d25edfe/007f8ce12cb13eaeafa7b394299a5d2657acc25c?placeholderIfAbsent=true"
                className="spilcafeen-define-image-right"
                alt="Card sorting test results"
              />
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}

export default SpilcafeenDefinePhase;
