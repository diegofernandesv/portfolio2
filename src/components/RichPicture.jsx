import './RichPicture.css';
import AnimatedContent from './AnimatedContent';

function RichPicture() {
  return (
      <div className="rich-picture-section">
        <div className="rich-picture-image">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/13f70c6f5f007d3192d952a1aa5458fab4d2ff34?width=1532"
            alt="Rich Picture"
            className="picture-image"
          />
        </div>
        <div className="rich-picture-content">
          <div className="rich-picture-text">
            <div className="rich-picture-title">
              Rich Picture
            </div>
            <div className="rich-picture-description">
              Using Rich Pictures, we identified confusion in game selection, issues with the digital system, and crowding, while also highlighting the importance of community and social interaction. These insights guided our OOUX tables and user stories.
            </div>
          </div>
        </div>
      </div>
  );
}

export default RichPicture;
