import ProjectHeader from "../components/ProjectHeader";
import IntroSection from "../components/IntroSection";
import DesignProcess from "../components/DesignProcess";
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
import "../components/NaturhistoriskTheme.css";
import spotlightImg from '../assets/Spotlight.png';

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
        content="Naturhistorisk Museum Aarhus was struggling to attract independent adults, with most of its visitors being families and school groups. Exhibitions felt static, outdated, and lacked the interactivity that today's audiences expect. Our challenge was to create a solution that could increase visitor engagement and make the museum more appealing to adults aged 18–30. The result was The Spotlight — a digital add-on that transforms passive observation into active participation through interactive booths, storytelling, and reflection."
      />

      <ToggleSection title="Discover" defaultOpen={true}>
        <DesignProcess />
        <FieldResearch />
        <DeskResearch
          content="We began by analyzing museum reports, annual data, and online reviews. This confirmed that Naturhistorisk Museum primarily attracts families and school groups, while independent adults were largely absent. Reviews highlighted that interactive and digital exhibitions like OOPS! stood out as positive, while older displays were criticized for being static, text-heavy, and outdated. This reinforced the need for a new approach focused on engagement, interactivity, and relevance for young adults."
        />
      </ToggleSection>

      <ToggleSection title="Define">
        <Persona />
        <CardSortingTest />
      </ToggleSection>

      <ToggleSection title="Develop">
        <DevelopSection />
        <HiFi />
      </ToggleSection>

      <RichPicture />
      <OOUX />
      <UserStories />
      <UserStoryMap />
      <UserFlow />
      <Mascot />
      <LoFi />
      <DesignSystem />
      <TakeAways />
      <OtherProjects />
    </div>
  );
}

export default NaturhistoriskMuseum;
