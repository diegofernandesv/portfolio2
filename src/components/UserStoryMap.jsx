import './UserStoryMap.css';
import AnimatedContent from './AnimatedContent';

function UserStoryMap() {
  return (
      <div className="user-story-map-section">
        <div className="user-story-map-content">
          <div className="user-story-map-text">
            <div className="user-story-map-title">
              User Story Map
            </div>
            <div className="user-story-map-description">
              We mapped user stories to visualize the journey, prioritize features, and spot gaps. This showed the solution must focus on seamless game discovery with filters and clear information, which later informed our sketches and user flows.
            </div>
          </div>
        </div>
        <div className="user-story-map-image">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f02a845e313f602966a24d711766851594317c72?width=1490"
            alt="User Story Map"
            className="story-map-image"
          />
        </div>
      </div>
  );
}

export default UserStoryMap;
