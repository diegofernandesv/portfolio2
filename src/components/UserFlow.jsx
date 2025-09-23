import './UserFlow.css';
import AnimatedContent from './AnimatedContent';

function UserFlow() {
  return (
      <div className="user-flow-section">
        <div className="user-flow-content">
          <div className="user-flow-text">
            <div className="user-flow-title">
              User Flow
            </div>
            <div className="user-flow-description">
              We created user flows to define the journey and ensure smooth navigation. This helped us identify key pages like game overview and filtering, guiding our sketches toward a clear and user-friendly design.
            </div>
          </div>
        </div>
        <div className="user-flow-image">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/66fbebbf9eb2bfe7d0cbb72787f756e72023312e?width=1290"
            alt="User Flow diagram"
            className="flow-image"
          />
        </div>
      </div>
  );
}

export default UserFlow;
