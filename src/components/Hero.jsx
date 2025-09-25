import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../aspekta-font.css";
import "./hero.css";
import gsap from "gsap";
import Flip from "gsap/Flip";
import CustomEase from "gsap/CustomEase";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import videoSrc from "../assets/scene.mp4";
import homeIcon from "../assets/home.svg";
import projectsIcon from "../assets/projects.svg";
import aboutmeIcon from "../assets/aboutme.svg";
import cvIcon from "../assets/cv.svg";
import StarBorder from "./StarBorder";

const INITIAL_ZOOM = 1.0;
const images = [image1, image2, image3]; // video handled separately now

function Hero({ onAnimationComplete, preventRestart = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const burgerRef = useRef(null);
  const checkWorkBtnRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(Flip, CustomEase);

    CustomEase.create("customEase", "0.6, 0.01, 0.05, 1");
    CustomEase.create("directionalEase", "0.16, 1, 0.3, 1");
    CustomEase.create("smoothBlur", "0.25, 0.1, 0.25, 1");
    CustomEase.create("gentleIn", "0.38, 0.005, 0.215, 1");

    gsap.config({ force3D: true });

    let mainTl;
    let hasAnimationCompleted = false;

    const handleScroll = () => {
      const restartBtn = document.querySelector(".restart-btn");
      if (!restartBtn || !hasAnimationCompleted) return;
      if (window.scrollY > 10) {
        restartBtn.style.opacity = "0";
        restartBtn.style.pointerEvents = "none";
      } else {
        restartBtn.style.opacity = "1";
        restartBtn.style.pointerEvents = "auto";
      }
    };

    const resetToInitialState = () => {
      gsap.set(".preloader-container", {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        width: 400,
        height: 300,
        overflow: "hidden",
        zIndex: 5,
        display: "block",
        opacity: 1,
      });

      gsap.set(".stage-video", {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        width: 250,
        height: 150,
        zIndex: 7,
        opacity: 0,
        scale: INITIAL_ZOOM,
        filter: "none",
        display: "block",
        objectFit: "cover",
      });

      gsap.set(".big-title", { opacity: 0 });
      gsap.set(".title-line span", { y: "100%" });

      gsap.set(".header-left", { opacity: 0, y: -20 });
      gsap.set(".header-middle", { opacity: 0, y: -20 });
      gsap.set(".social-links", { opacity: 0, y: -20 });
      gsap.set(".footer", { y: "100%" });

      const wrappers = document.querySelectorAll(".image-wrapper");
      const media = document.querySelectorAll(".image-wrapper img");
      gsap.set(wrappers, {
        visibility: "visible",
        position: "absolute",
        inset: 0,
        clipPath: "inset(100% 0 0 0)",
        xPercent: 0,
        yPercent: 0,
        clearProps: "transform,transformOrigin",
        zIndex: 6,
      });
      gsap.set(media, {
        width: "100%",
        height: "100%",
        scale: INITIAL_ZOOM,
        transformOrigin: "center center",
      });
    };

    const initAnimation = () => {
      if (mainTl) mainTl.kill();
      hasAnimationCompleted = false;
      if (preventRestart) return;

      resetToInitialState();

      const wrappers = document.querySelectorAll(".image-wrapper");
      const stageVideo = document.querySelector(".stage-video");

      const headerLeft = document.querySelector(".header-left");
      const headerMiddle = document.querySelector(".header-middle");
      const socialLinks = document.querySelector(".social-links");
      const titleLines = document.querySelectorAll(".title-line span");

      mainTl = gsap.timeline();

      wrappers.forEach((wrapper, index) => {
        if (index > 0) mainTl.add(`image${index}`, "<0.15");
        mainTl.to(
          wrapper,
          { clipPath: "inset(0% 0 0 0)", duration: 0.65, ease: "smoothBlur" },
          index > 0 ? `image${index}` : 0
        );
      });

      mainTl.to(
        ".stage-video",
        { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 0.65, ease: "smoothBlur" },
        "<0.15"
      );
      mainTl.to(
        wrappers,
        { opacity: 0, duration: 0.3, ease: "customEase" },
        ">0.1"
      );
      mainTl.to(
        ".stage-video",
        { opacity: 1, duration: 0.3, ease: "customEase", width: 400, height: 300, borderRadius: 32, scale: INITIAL_ZOOM },
        "<0.1"
      );

      mainTl.add("pauseBeforeZoom", ">0.2");
      mainTl.add("zoomBlock", "pauseBeforeZoom");

      mainTl.add(() => {
        const state = Flip.getState(".stage-video");
        gsap.set(".stage-video", {
          position: "fixed",
          top: "46%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          width: "100%",
          height: "95%",
          zIndex: 10,
          borderRadius: "0 0 32 32",
        });
        Flip.from(state, {
          duration: 1.05,
          ease: "customEase",
          absolute: true,
          scale: true,
          simple: true,
        });
        gsap.to(".preloader-container", {
          opacity: 0,
          duration: 0.7,
          ease: "customEase",
          onComplete: () => gsap.set(".preloader-container", { display: "none" }),
        });
      }, "zoomBlock");

      mainTl.add("pauseAfterZoom", ">0.25");

      mainTl.add("headerFooter", "pauseAfterZoom");
      mainTl.to(headerLeft, { opacity: 1, y: 0, duration: 0.6, ease: "directionalEase" }, "headerFooter");
      mainTl.to(headerMiddle, { opacity: 1, y: 0, duration: 0.6, ease: "directionalEase", delay: 0.15 }, "headerFooter");
      mainTl.to(socialLinks, { opacity: 1, y: 0, duration: 0.6, ease: "directionalEase", delay: 0.3 }, "headerFooter");
      mainTl.to(".footer", { y: 0, duration: 0.7, ease: "directionalEase" }, "headerFooter+=0.4");

      mainTl.add("titleReveal", ">-0.2");
      mainTl.to(".big-title", { opacity: 1, duration: 0.3 }, "titleReveal");
      mainTl.to(
        titleLines,
        {
          y: "0%",
          duration: 0.9,
          stagger: 0.15,
          ease: "customEase",
          onComplete: () => {
            gsap.set(".preloader-container", { display: "none" });
            gsap.to(".restart-btn", {
              opacity: 1,
              duration: 0.4,
              pointerEvents: "auto",
              onComplete: () => {
                handleScroll();
              },
            });
            if (checkWorkBtnRef.current) {
              gsap.fromTo(
                checkWorkBtnRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.7, ease: "customEase", onComplete: () => onAnimationComplete && onAnimationComplete() }
              );
            } else if (onAnimationComplete) {
              onAnimationComplete();
            }
          },
        },
        "titleReveal+=0.1"
      );

      return mainTl;
    };

    const kickoff = setTimeout(initAnimation, 100);

    const handleResize = () => {};
    if (!preventRestart) window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(kickoff);
      if (!preventRestart) window.removeEventListener("resize", handleResize);
      if (mainTl) mainTl.kill();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onAnimationComplete, preventRestart]);

  useEffect(() => {
    if (!mobileNavRef.current || !burgerRef.current) return;

    if (menuOpen) {
      gsap.to(mobileNavRef.current, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out", pointerEvents: "auto" });
      gsap.to(burgerRef.current.children, {
        rotate: (i) => (i === 0 ? 45 : i === 1 ? 0 : -45),
        y: (i) => (i === 1 ? -8 : 0),
        opacity: (i) => (i === 1 ? 0 : 1),
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(mobileNavRef.current, { x: "100%", opacity: 0, duration: 0.5, ease: "power3.in", pointerEvents: "none" });
      gsap.to(burgerRef.current.children, { rotate: 0, y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.inOut" });
    }
  }, [menuOpen]);

  return (
    <section className="hero" aria-label="Intro hero">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="header-left">Diego Fernandes ©</div>

          {/* DESKTOP NAV (uses NavLink for active state) */}
          <div className="header-middle">
            <NavLink style={{ display:"flex", flexDirection: "row" , alignItems: "center",}}
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <img src={homeIcon} alt="Home" style={{ width: 16, height: 16, marginRight: 8, verticalAlign: "middle" }} />
              Home
            </NavLink>

            <NavLink style={{ display:"flex", flexDirection: "row" , alignItems: "center",}}
              to="/projects"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <img src={projectsIcon} alt="Projects" style={{ width: 16, height: 16, marginRight: 8, verticalAlign: "middle" }} />
              Projects
            </NavLink>

            <NavLink style={{ display:"flex", flexDirection: "row" , alignItems: "center",}}
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <img src={aboutmeIcon} alt="About me" style={{ width: 16, height: 16, marginRight: 8, verticalAlign: "middle" }} />
              About me
            </NavLink>
          </div>

          <div className="header-right">
            <div style={{ display:"flex", flexDirection: "row" , alignItems: "center",}}>
              {/* Serve CV from /public as 'Cv Diego Fernandes.pdf' with correct base path */}
              <a
                href="https://drive.google.com/file/d/1_12JZX2jlAc8FqAXYQyKM8j2N6_n4sQz/view?usp=sharing"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={cvIcon} alt="CV" style={{ width: 16, height: 16, marginRight: 4, verticalAlign: "middle" }} />
                Check my CV
              </a>
            </div>

            <button
              className={`burger ${menuOpen ? 'open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              ref={burgerRef}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="burger-bar" />
              <span className="burger-bar" />
              <span className="burger-bar" />
            </button>
          </div>
        </div>

        {/* MOBILE NAV (use Link to close menu + route) */}
        <nav
          className="mobile-nav"
          ref={mobileNavRef}
          style={{ pointerEvents: menuOpen ? "auto" : "none" }}
        >
          <button
            className="close-nav"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            About me
          </Link>
          <a
            href="https://drive.google.com/file/d/1_12JZX2jlAc8FqAXYQyKM8j2N6_n4sQz/view?usp=sharing"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <img src={cvIcon} alt="CV" style={{ width: 16, height: 16, marginRight: 8, verticalAlign: "middle" }} />
            Check my CV
          </a>
        </nav>
      </header>

      {/* Stage: persistent fullscreen video behind the preloader */}
      <div className="hero-stage">
        <video className="stage-video" src={videoSrc} autoPlay loop muted playsInline />
      </div>

      {/* Preloader box (only images) */}
      <div className="preloader-container">
        {images.map((src, i) => (
          <div className="image-wrapper" key={i}>
            <img src={src} alt={`Image ${i + 1}`} className="hero-image" />
          </div>
        ))}
      </div>

      {/* Big Title */}
      <div className="big-title">
        <div className="title-line"><span>UX/UI Designer &</span></div>
        <div className="title-line"><span>creative developer in</span></div>
        <div className="title-line"><span>the making</span></div>

        <StarBorder ref={checkWorkBtnRef}>Check my work</StarBorder>
      </div>

      {/* Footer inside hero */}
      <footer className="footer">
        <div
          className="coordinates"
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
          onClick={() => {
            const nextSection = document.querySelector(".after-hero");
            if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle" }}>
            <path d="M12 16V4M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Scroll Down</span>
        </div>
      </footer>
    </section>
  );
}

export default Hero;
