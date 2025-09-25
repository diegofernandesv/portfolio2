import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./hero.css";
import homeIcon from "../assets/home.svg";
import projectsIcon from "../assets/projects.svg";
import aboutmeIcon from "../assets/aboutme.svg";
import cvIcon from "../assets/cv.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const burgerRef = useRef(null);

  // Ensure header elements are visible even without GSAP timeline
  useEffect(() => {
    const els = document.querySelectorAll(".header-left, .header-middle, .social-links");
    els.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }, []);

  // Simple burger animation (CSS handles the rest)
  useEffect(() => {
    if (!mobileNavRef.current || !burgerRef.current) return;
    // slide overlay in/out
    mobileNavRef.current.style.transform = menuOpen ? "translateX(0)" : "translateX(100%)";
    mobileNavRef.current.style.opacity = menuOpen ? "1" : "0";
    mobileNavRef.current.style.pointerEvents = menuOpen ? "auto" : "none";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Left */}
        <div className="header-left">Diego Fernandes ©</div>
        
        {/* Middle (desktop nav) */}
        <nav className="header-middle">
          <NavLink to="/" style={{ display:"flex", flexDirection: "row" , alignItems: "center",}} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <img src={homeIcon} alt="Home" style={{ width: 16, height: 16, marginRight: 8, verticalAlign: "middle" }} />
            Home
          </NavLink>

          <NavLink to="/projects" style={{ display:"flex", flexDirection: "row" , alignItems: "center",}} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <img src={projectsIcon} alt="Projects" style={{ width: 16, height: 16, marginRight: 8, verticalAlign: "middle" }} />
            Projects
          </NavLink>

          <NavLink to="/about" style={{ display:"flex", flexDirection: "row" , alignItems: "center",}} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <img src={aboutmeIcon} alt="About me" style={{ width: 16, height: 16, marginRight: 8, verticalAlign: "middle" }} />
            About me
          </NavLink>
        </nav>
 
        {/* Right */}
        <div className="header-right">
          <div>
            {/* Replace href with your real CV URL (can be /portfolio/cv.pdf on GH Pages) */}
            <a href="https://drive.google.com/file/d/1_12JZX2jlAc8FqAXYQyKM8j2N6_n4sQz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-link">
              <img src={cvIcon} alt="CV" style={{ width: 16, height: 16, marginRight: 4, verticalAlign: "middle" }} />
              Check my CV
            </a>
          </div>

          <button
            className="burger"
            aria-label="Toggle menu"
            ref={burgerRef}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <nav className="mobile-nav" ref={mobileNavRef}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About me</Link>
        <a href="/portfolio/cv.pdf" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          <img src={cvIcon} alt="CV" style={{ width: 16, height: 16, marginRight: 8, verticalAlign: "middle" }} />
          Check my CV
        </a>
      </nav>
    </header>
  );
}
