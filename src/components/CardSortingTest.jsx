import './CardSortingTest.css';
import AnimatedContent from './AnimatedContent';

function CardSortingTest() {
  return (
    <AnimatedContent>
      <div className="card-sorting-section">
        <div className="card-sorting-content">
          <div className="card-sorting-text">
            <div className="card-sorting-title">
              Card Sorting Test
            </div>
            <div className="card-sorting-description">
              To validate our ideas, we conducted card sorting with 5 users. They ranked game time, number of players, category, and shelf location as the most important details. For filters, they prioritized language, genre, players, and difficulty. These insights guided the design of our game cards and filtering system.
            </div>
          </div>
        </div>
        <div className="card-sorting-image">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/23e6637485c768c54b3c16c32fed0c3c91885494?width=1490"
            alt="Card Sorting Test results"
            className="sorting-image"
          />
        </div>
      </div>
    </AnimatedContent>
  );
}

export default CardSortingTest;
