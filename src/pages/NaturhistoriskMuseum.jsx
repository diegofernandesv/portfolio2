import ProjectHeader from "../components/ProjectHeader";
import IntroSection from "../components/IntroSection";
import DesignProcess from "../components/DesignProcess";
import ConceptExperienceDesign from "../components/ConceptExperienceDesign";
import ResearchChallenge from "../components/ResearchChallenge";
import FieldResearch from "../components/FieldResearch";
import DeskResearch from "../components/DeskResearch";
import Persona from "../components/Persona";
import RichPicture from "../components/RichPicture";
import OOUX from "../components/OOUX";
import UserStories from "../components/UserStories";
import UserStoryMap from "../components/UserStoryMap";
import UserFlow from "../components/UserFlow";
import CardSortingTest from "../components/CardSortingTest";
import LoFi from "../components/LoFi";
import DesignSystem from "../components/DesignSystem";
import HiFi from "../components/HiFi";
import Mascot from "../components/Mascot";
import DevelopSection from "../components/DevelopSection";
import TakeAways from "../components/TakeAways";
import OtherProjects from "../components/OtherProjects";
import ToggleSection from "../components/ToggleSection";
import ExhibitionBooths from "../components/ExhibitionBooths";
import LoFiToHiFi from "../components/LoFiToHiFi";
import TypeColors from "../components/TypeColors";
import "../components/NaturhistoriskTheme.css";
import spotlightImg from '../assets/Spotlight.png';
import Footer from "../components/Footer";
import StarBorder from "../components/StarBorder";
import "./spilcafeen.css";

function NaturhistoriskMuseum() {
  return (
    <div className="naturhistorisk-museum-theme">
      <ProjectHeader
        title="Naturhistorisk Museum"
        backgroundImage={spotlightImg}
        duration="7 weeks"
        team="4 people"
        date="April 2025"
      />
      <IntroSection
        content="Naturhistorisk Museum Aarhus was struggling to attract independent adults, with most of its visitors being families and school groups. Exhibitions felt static, outdated, and lacked the interactivity that today's audiences expect. Our challenge was to create a solution that could increase visitor engagement and make the museum more appealing to adults aged 18–30. "
        solution = "The result was The Spotlight — a digital add-on that transforms passive observation into active participation through interactive booths, storytelling, and reflection."
      />
      
         <DesignProcess />
      <ToggleSection title="Research" defaultOpen={true}>
        <ResearchChallenge />
      </ToggleSection>

      <ToggleSection title="The concept">
        <ConceptExperienceDesign />
        <ExhibitionBooths />
      </ToggleSection>

      <ToggleSection title="Developing the idea">
        <LoFiToHiFi />
        <TypeColors />
      </ToggleSection>
      <TakeAways
        content={
          <>
            Working on The Spotlight for Naturhistorisk Museum gave me valuable experience designing for a cultural institution with real audience challenges. Our team followed the full UX process — from research and field observations to wireframes, prototypes, and hi-fi testing. Collaborating under time constraints taught me how to stay focused on user needs while balancing feasibility.
            <br />
            <br />
            My contributions included research, user flows, lo-fi and hi-fi prototypes, and shaping the overall design system. I also worked on defining the tone of voice and interaction style to ensure the experience felt authentic and reflective. Even with limitations, iterating as a team and transforming research insights into a concept that could genuinely attract more adult visitors was a highly rewarding process.
          </>
        }
      />
        <OtherProjects />
        <StarBorder
          as="button"
          className="go-top-fixed"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          aria-label="Go to the top"
          title="Go to the top"
          style={{ padding: 0 }}
        >
          Go to the top
        </StarBorder>
        <Footer />
    </div>
  );
}

export default NaturhistoriskMuseum;
