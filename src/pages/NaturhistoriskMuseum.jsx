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
import "../components/NaturhistoriskTheme.css";
import spotlightImg from "../assets/Spotlight.png";

function NaturhistoriskMuseum() {
  return (
    <div className="naturhistorisk-museum-theme">
      <ProjectHeader
        title="The Spotlight -Naturhistorisk Museum"
        backgroundImage={spotlightImg}
        duration="7 weeks"
        team="4 people"
        date="April 2025"
      />
      <IntroSection 
        content={
          <>
            Naturhistorisk Museum Aarhus is well-visited by families and school groups but struggles to attract independent adults. Exhibitions often felt static and outdated, offering little interactivity or reflection.
            <br />
            <br />
            Our challenge was to design a digital add-on that turns passive observation into active participation — making the museum experience more engaging and relevant for adults aged 18–30.
          </>
        }
        solution="By applying a structured UX research and design process, we created The Spotlight — an interactive digital concept that transforms static exhibitions into engaging experiences with testimonies, quizzes, and personal reflections."
      />
      <DesignProcess />
      <FieldResearch />
      <DeskResearch 
        content="We began by analyzing museum reports, annual data, and online reviews. This confirmed that Naturhistorisk Museum primarily attracts families and school groups, while independent adults were largely absent. Reviews highlighted that interactive and digital exhibitions like OOPS! stood out as positive, while older displays were criticized for being static, text-heavy, and outdated. This reinforced the need for a new approach focused on engagement, interactivity, and relevance for young adults."
      />
      <Persona />
      <RichPicture />
      <OOUX />
      <UserStories />
      <UserStoryMap />
      <UserFlow />
      <CardSortingTest />
      <DevelopSection />
      <Mascot />
      <LoFi />
      <DesignSystem />
      <HiFi />
      <TakeAways />
      <OtherProjects />
    </div>
  );
}

export default NaturhistoriskMuseum;
