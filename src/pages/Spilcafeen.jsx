import ProjectHeader from "../components/ProjectHeader";
import SpilcafeenIntro from "../components/spilcafeen/SpilcafeenIntro.jsx";
import SpilcafeenDesignProcess from "../components/spilcafeen/SpilcafeenDesignProcess.jsx";
import SpilcafeenResearch from "../components/spilcafeen/SpilcafeenResearch.jsx";
import SpilcafeenDefinePhase from "../components/spilcafeen/SpilcafeenDefinePhase.jsx";
import SpilcafeenIdeate from "../components/spilcafeen/SpilcafeenIdeate.jsx";
import SpilcafeenHiFiMascot from "../components/spilcafeen/SpilcafeenHiFiMascot.jsx";
import TakeAways from "../components/TakeAways";
import OtherProjects from "../components/OtherProjects";
import ToggleSection from "../components/ToggleSection";
import StarBorder from "../components/StarBorder";
import Footer from "../components/Footer";
import "./spilcafeen.css";
import image1 from "../assets/SpilcafeenHeader.png";

function Spilcafeen() {
  return (
    <>
      <ProjectHeader
        title="Spilcafeen"
        backgroundImage={image1}
        duration="4 weeks"
        team="4 people"
        date="Feb. 2025"
      />
      <SpilcafeenIntro />
      <SpilcafeenDesignProcess />

      <ToggleSection title="Discover" defaultOpen={true}>
        <SpilcafeenResearch />
      </ToggleSection>

      <ToggleSection title="Define">
        <SpilcafeenDefinePhase />
      </ToggleSection>

      <ToggleSection title="Develop">
        <SpilcafeenIdeate />
      </ToggleSection>

      <ToggleSection title="Deliver">
       <SpilcafeenHiFiMascot />
      </ToggleSection>

      <TakeAways
        onCta={() =>
          window.open(
            'https://www.figma.com/proto/2eQpcFC1snkJi8UzOeiHII/Spilcafeen-Prototypes?page-id=125%3A398&node-id=811-5792&viewport=156%2C20%2C0.19&t=ttc0Jy7ofsA4Yba4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=811%3A5792',
            '_blank',
            'noopener,noreferrer'
          )
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
    </>
  );
}

export default Spilcafeen;
