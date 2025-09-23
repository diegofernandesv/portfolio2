import './UserStories.css';
import AnimatedContent from './AnimatedContent';

function UserStories() {
  return (
      <div className="user-stories-section">
        <div className="user-stories-image">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9ae4850f88e48b5e6b94af579d3690007ff2624a?width=1490"
            alt="User Stories"
            className="stories-image"
          />
        </div>
        <div className="user-stories-content">
          <div className="user-stories-text">
            <div className="user-stories-title">
              User Stories
            </div>
            <div className="user-stories-description">
              Guests need quick game search and recommendations, while admins struggle with updating the site and poor usability. These insights shaped our goal of creating an intuitive and efficient solution.
            </div>
          </div>
        </div>
      </div>
  );
}

export default UserStories;
