import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedContent from "./AnimatedContent";
import "./PortfolioGrid.css";
import presentation from '../assets/presentation.png';

function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const handleProjectClick = (projectTitle) => {
    if (projectTitle.includes("SpilCafeen")) {
      navigate("/spilcafeen");
    } else if (projectTitle.includes("The Spotlight") || projectTitle.includes("Naturhistorisk")) {
      navigate("/naturhistorisk-museum");
    } else if (projectTitle.includes("Copenhagen Fashion Week")) {
      navigate("/oops-behance");
    } else if (projectTitle.includes("Trailbound")) {
      navigate("/trailbound");
    } else if (projectTitle.toLowerCase().includes("caracas")) {
      navigate("/oops-behance1");
    }
  };

  const filters = ["All", "UX/UI", "Coding", "Graphic Design", "Branding"];

  const projects = [
    {
      id: 1,
      title: "SpilCafeen - Figuring out what to play",
      image: "https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d644e0bdf7def47c98433891c3b748d710a1ddbf?placeholderIfAbsent=true",
      categories: ["UX/UI"],
      isAbsolute: true
    },
    {
      id: 2,
      title: "The Spotlight – Increasing Visitor Engagement Through Digital Interaction",
      image: "https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/e604f63990469168b2ff6fd62c4407ac1a4c5c7d?placeholderIfAbsent=true",
      categories: ["UX/UI"]
    },
    {
      id: 5,
      title: "Trailbound",
                image:"https://api.builder.io/api/v1/image/assets/TEMP/be9b66157cf5389a473ef1eae1c08fc512b8aa79?placeholderIfAbsent=true",
      categories: ["Branding"]
    },
    {
      id: 3,
      title: "Copenhagen Fashion Week",
      image: "https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/0eb41618f11099cc313b06a22fd2b487dc0fafaf?placeholderIfAbsent=true",
      categories: ["UX/UI"]
    },
    {
      id: 4,
      title: "VisitCaracas",
      image: presentation,
      categories: ["UX/UI", "Coding"]
    },
    {
      id: 6,
      title: "AllUNeed",
      image: "https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/7193ce62c7d2938b09084a3d9ba81b1632ec7e8d?placeholderIfAbsent=true",
      categories: ["Graphic Design"],
      comingSoon: true
    },
    {
      id: 7,
      title: "Laeso Kur",
      image: "https://api.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/7193ce62c7d2938b09084a3d9ba81b1632ec7e8d?placeholderIfAbsent=true",
      categories: ["Graphic Design"],
      comingSoon: true
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => 
        project.categories.includes(activeFilter)
      );

  const hasSingleResult = filteredProjects.length === 1;

  return (
    <AnimatedContent>
      <div className="portfolio-grid">
        <div className="portfolio-header">
          <h1 className="portfolio-title">Selected work</h1>
          
          <nav className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`portfolio-filter-button ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </nav>
        </div>

        <AnimatedContent>
          <div className={`portfolio-projects-grid${hasSingleResult ? ' single-result' : ''}`}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`portfolio-project-card`}
                onClick={() => handleProjectClick(project.title)}
              >
                <div className="portfolio-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-project-image"
                  />
                  <div className="portfolio-tag-absolute">
                    {project.categories[0]}
                  </div>
                </div>
                
                <div className="portfolio-project-info">
                  <h3 className="portfolio-project-title">{project.title}</h3>
                  {project.comingSoon && (
                    <p className="portfolio-coming-soon">Coming soon</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </AnimatedContent>
  );
}

export default PortfolioGrid;
