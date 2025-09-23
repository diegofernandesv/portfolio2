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
import Footer from "../components/Footer";

function Spilcafeen() {
  return (
    <>
      <ProjectHeader
        title="Spilcafeen"
        backgroundImage="https://api.builder.io/api/v1/image/assets/TEMP/4f1c92aa42f034d460d41ab1076ef1b5193af873?width=3024"
        duration="4 weeks"
        team="4 people"
        date="Feb. 2025"
      />
      <IntroSection />
      <DesignProcess />
      <FieldResearch />
      <DeskResearch />
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
      <Footer />
    </>
  );
}

export default Spilcafeen;
