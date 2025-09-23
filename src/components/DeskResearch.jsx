import './DeskResearch.css';
import AnimatedContent from './AnimatedContent';

function DeskResearch() {
  return (
    <AnimatedContent>
      <div className="desk-research-section">
        <div className="desk-research-content">
          <div className="desk-research-title">
            Desk Research
          </div>
          <div className="desk-research-description">
            Through our desk research, we analyzed reports, forums, and
            applied netnography to understand Spilcaféen's target audience. We
            found that the core users are young adults (18–34), both men and
            women, including students, young professionals, and families,
            within an international and multicultural environment.
          </div>
        </div>
        <div className="desk-research-additional">
          <div className="desk-research-additional-text">
            By reviewing community discussions, we uncovered key psychographic
            insights, such as the value users place on social interaction, fun,
            and technology detox. Altogether, this research highlighted the
            importance of designing a fast and intuitive way to find games,
            while supporting the social and relaxed environment that users seek.
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}

export default DeskResearch;
