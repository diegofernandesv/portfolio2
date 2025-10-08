import TrailboundIntro from "../components/trailbound/TrailboundIntro.jsx";
import TrailboundBrandGuide from "../components/trailbound/TrailboundBrandGuide.jsx";
import OtherProjects from "../components/OtherProjects";
import StarBorder from "../components/StarBorder";
import Footer from "../components/Footer.jsx";
import "./spilcafeen.css";

export default function Trailbound() {
  return (
    <>
      <TrailboundIntro />
      <TrailboundBrandGuide />
      <OtherProjects
        projects={[
          {
            to: "/spilcafeen",
            image:
              "https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d644e0bdf7def47c98433891c3b748d710a1ddbf?placeholderIfAbsent=true",
            tag: "UX/UI",
            name: "Spilcafeen",
          },
          {
            to: "/naturhistorisk-museum",
            image:
              "https://api.builder.io/api/v1/image/assets/aca817ebcbed425ab4227fd20aad7fb8/e604f63990469168b2ff6fd62c4407ac1a4c5c7d?placeholderIfAbsent=true",
            tag: "UX/UI",
            name: "Naturhistorisk Museum",
          },
        ]}
      />
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
