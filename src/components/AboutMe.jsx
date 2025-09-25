// AboutMe.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./AboutMe.css";
import StarBorder from "./StarBorder";
import studiesIcon from "../assets/studies.svg";

function AboutMe() {
  // Más idiomas 👇
  const greetings = ["Hola", "Hej", "Hello", "Ciao", "Hallo", "Olá", "Hei"];

  const [greetingIndex, setGreetingIndex] = useState(0);
  const [greetingBox, setGreetingBox] = useState({ width: 0, height: 0 });

  const greetingRef = useRef(null);
  const containerRef = useRef(null);

  // Register GSAP plugins once
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
  }, []);

  // Init: measure greeting box + set up scroll-triggered animations
  useEffect(() => {
    let staticSplit = null;
    let descSplit = null;

    const setup = async () => {
      // Wait for fonts to avoid SplitText measuring issues
      if (document.fonts?.ready) {
        try {
          await document.fonts.ready;
        } catch (_) {}
      }

      // 1) Measure longest greeting to fix mask size (avoid layout shift)
      const measurer = document.createElement("span");
      measurer.style.position = "absolute";
      measurer.style.left = "-9999px";
      measurer.style.top = "0";
      measurer.style.whiteSpace = "nowrap";
      measurer.style.fontWeight = "500";

      const quoteEl = document.querySelector(".quote");
      if (quoteEl) {
        const cs = getComputedStyle(quoteEl);
        measurer.style.fontSize = cs.fontSize;
        measurer.style.fontFamily = cs.fontFamily;
        measurer.style.letterSpacing = cs.letterSpacing;
        measurer.style.lineHeight = cs.lineHeight;
      }

      document.body.appendChild(measurer);
      let maxW = 0,
        maxH = 0;
      for (const g of greetings) {
        measurer.textContent = `${g}!`;
        maxW = Math.max(maxW, measurer.offsetWidth);
        maxH = Math.max(maxH, measurer.offsetHeight);
      }
      document.body.removeChild(measurer);
      setGreetingBox({ width: maxW, height: maxH });

      // 2) Reveal title container
      gsap.set("#quote", { opacity: 1 });

      // --- Static text split/animate on scroll (replays on enter & enter-back)
      if (SplitText?.create) {
        staticSplit = SplitText.create("#quote-static", { type: "chars,words" });
        gsap.from(staticSplit.chars, {
          duration: 0.5,
          opacity: 0,
          yPercent: 12,
          stagger: { each: 0.012, from: "random" },
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          },
        });
      }

      // --- Description split/animate on scroll (replays)
      if (SplitText?.create) {
        gsap.set("#aboutme-desc-text", { opacity: 1 });
        descSplit = SplitText.create("#aboutme-desc-text", {
          type: "chars,words",
        });
        gsap.from(descSplit.chars, {
          duration: 1.0,
          opacity: 0,
          yPercent: 12,
          stagger: { each: 0.01, from: "random" },
          ease: "power2.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          },
        });
      }

      // --- CTA (StarBorder) pop-in on scroll (replays)

      // Ensure triggers recalc after fonts/layout settle
      ScrollTrigger.refresh();

      // Cleanup
      return () => {
        try {
          staticSplit && staticSplit.revert();
          descSplit && descSplit.revert();
        } catch (_) {
          // no-op
        }
        // Kill only triggers tied to this section
        ScrollTrigger.getAll()
          .filter((t) => t.vars?.trigger === containerRef.current)
          .forEach((t) => t.kill());
      };
    };

    let cleanup = () => {};
    setup().then((fn) => {
      if (typeof fn === "function") cleanup = fn;
    });

    return () => cleanup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Language rotation: first switch at 1.5s, then every 2s
  useEffect(() => {
    let intervalId;
    const first = setTimeout(() => {
      setGreetingIndex((p) => (p + 1) % greetings.length);
      intervalId = setInterval(() => {
        setGreetingIndex((p) => (p + 1) % greetings.length);
      }, 2000);
    }, 1500);

    return () => {
      clearTimeout(first);
      if (intervalId) clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Crossfade current greeting (no layout shift)
  useEffect(() => {
    if (!greetingRef.current) return;
    gsap.fromTo(
      greetingRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.45, ease: "power2.out" }
    );
  }, [greetingIndex]);

  return (
    <div className="about-me-container" ref={containerRef}>
      <h3 id="quote" className="quote">
        {/* Máscara de saludo con ancho/alto fijos */}
        <span
          className="greeting-wrap"
          style={{
            width: greetingBox.width ? `${greetingBox.width}px` : "auto",
            height: greetingBox.height ? `${greetingBox.height}px` : "1em",
          }}
        >
          <span ref={greetingRef} className="greeting-current">
            {greetings[greetingIndex]}!👋
          </span>
        </span>{" "}
        <span id="quote-static">
          I&apos;m Diego, a design student passionate about creating simple,
          meaningful digital experiences.
        </span>
      </h3>

      <div className="about-me-text">
        <p id="aboutme-desc" className="aboutme-line">
          <img
            src={studiesIcon}
            className="desc-icon"
            width="24"
            height="24"
            alt=""
          />
          <span id="aboutme-desc-text" className="desc-text">
            Currently studying Multimedia Design at Business Academy Aarhus.
          </span>
        </p>

        {/* CTA with a class so we can animate it */}
        <div className="about-me-cta">
          <StarBorder>Learn More</StarBorder>
        </div>
      </div>

      {/* If you want to use the video later in this section */}
      {/* <video className="about-me-video" src={videoSrc} autoPlay muted loop playsInline /> */}
    </div>
  );
}

export default AboutMe;
