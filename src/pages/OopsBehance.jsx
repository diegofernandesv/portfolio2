import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SplitText from "../components/SplitText";
import StarBorder from "../components/StarBorder";

export default function OopsBehance() {
  const navigate = useNavigate();
  const behanceUrl =
    "https://www.behance.net/gallery/216805763/Copenhagen-Fashion-Week-UXUI";

  return (
    <>
      <Header  />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center",
          padding: "48px 20px",
          gap: 16,
          color: "black",
        }}
      >
        <SplitText
          tag="h1"
          text="Oops! I haven't added this project on my portfolio website yet."
          className="oops-title"
          splitType="words"
          delay={40}
          duration={0.6}
          from={{ opacity: 0, y: 14 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />

        <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
          <StarBorder as="button" onClick={() => navigate(-1)}>
            Go back
          </StarBorder>
          <StarBorder
            as="a"
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check the project on Behance
          </StarBorder>
        </div>
      </div>
    </>
  );
}
