// CrawlVelocityBoost.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CrawlVelocityBoost() {
  const rootRef = useRef(null);
  const crawlRef = useRef(null);
  const tlRef = useRef(null);
  const boostRef = useRef(0);
  const directionRef = useRef(1); // 1 forward, -1 reverse
  const viewportRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle twinkle animation for stars
      if (starsRef.current) {
        const stars = Array.from(starsRef.current.children);
        gsap.to(stars, {
          opacity: () => gsap.utils.random(0.2, 0.9),
          duration: () => gsap.utils.random(0.8, 2.5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.02,
        });
      }
      // Base crawl timeline (plays once; we handle re-entry via ScrollTrigger)
      tlRef.current = gsap.timeline({ repeat: 0, onComplete: () => {
        // When the crawl finishes, hide the overlay so the page continues
        if (viewportRef.current) gsap.set(viewportRef.current, { autoAlpha: 0, pointerEvents: "none" });
      }});
      tlRef.current.fromTo(
        crawlRef.current,
        { y: "70vh" },
        { y: "-180vh", duration: 60, ease: "none" }
      );

      const baseSpeed = 1;        // steady forward crawl
      const maxBoost = 20;        // allow much faster skipping
      const decay = 0.94;         // boost decays a bit slower for a snappier feel
      const SCROLL_MAP = 250;     // lower = faster mapping from velocity to boost

      // Apply boost each tick
      const ticker = gsap.ticker.add(() => {
        boostRef.current *= decay;
        if (boostRef.current < 0.001) boostRef.current = 0;
        tlRef.current.timeScale(directionRef.current * (baseSpeed + boostRef.current));
      });

      // Listen to scroll velocity
      const st = ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: "bottom bottom",
        onLeave: () => {
          if (viewportRef.current) gsap.set(viewportRef.current, { autoAlpha: 0, pointerEvents: "none" });
          tlRef.current && tlRef.current.pause();
        },
        onEnter: () => {
          if (viewportRef.current) gsap.set(viewportRef.current, { autoAlpha: 1, pointerEvents: "auto" });
          tlRef.current && tlRef.current.play();
        },
        onEnterBack: () => {
          if (viewportRef.current) gsap.set(viewportRef.current, { autoAlpha: 1, pointerEvents: "auto" });
          tlRef.current && tlRef.current.play();
        },
        onUpdate(self) {
          const v = self.getVelocity(); // + when scrolling down, - when up
          const DEADZONE = 30; // avoid jitter around 0
          if (v > DEADZONE) {
            directionRef.current = 1;
          } else if (v < -DEADZONE) {
            directionRef.current = -1;
          } else {
            // When idle, resume normal forward crawl
            directionRef.current = 1;
          }

          const extra = gsap.utils.clamp(0, maxBoost, Math.abs(v) / SCROLL_MAP);
          // Ease toward the new boost quickly so it feels responsive
          gsap.to(boostRef, {
            duration: 0.15,
            current: extra,
            onUpdate: () => {
              boostRef.current = Math.max(boostRef.current, extra);
            },
          });
        },
      });

      return () => {
        gsap.ticker.remove(ticker);
        st.kill();
        tlRef.current && tlRef.current.kill();
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} style={{ background: "#000" }}>
      {/* Responsive type bump on phones */}
      <style>{`
        @media (max-width: 480px) {
          .crawl-vb { font-size: 1.2rem; line-height: 1.8; }
          .crawl-vb h1 { font-size: 2.1rem; }
          .crawl-vb h2 { font-size: 1.2rem; letter-spacing: .25em; }
          .crawl-vb p  { font-size: 1.2rem; }
        }
      `}</style>
      {/* Fixed viewport */}
      <div ref={viewportRef} style={styles2.viewport}>
        {/* Star field */}
        <div ref={starsRef} style={styles2.stars}>
          {Array.from({ length: 160 }).map((_, i) => (
            <span key={i} style={styles2.star()} />
          ))}
        </div>
        <div style={styles2.fade} />
        <div style={styles2.crawlPlane}>
          <div ref={crawlRef} style={styles2.crawl} className="crawl-vb">
            <div style={styles2.title}>
              <h2 style={styles2.h2}>Episode V</h2>
              <h1 style={styles2.h1}>It is a dark time for the Rebellion and a confusing time for recruiters…</h1>
            </div>
            <p>This person actually went into my about me page. Not sure why, but hola amigo.</p>
            <p>I finally managed to finish my portfolio.It took way longer than I expected, but here it is at last.
            </p>
             <p>What I didn’t realize is that a portfolio is never truly finished.
            It keeps changing, breaking, and getting redesigned forever.</p>
            <p>The funny part?
            I’m not even that big of a Star Wars fan.
            I just thought this would be a cool way to start my about me section.</p>
            <p>And seriously…
            why are you still reading this?
            Scroll down already — the real stuff is waiting.</p>
            {/* Add more paragraphs as needed */}
          </div>
        </div>
      </div>
      {/* Spacer so the page can scroll — needed to measure velocity */}
      <div style={{ height: "400vh" }} />
    </div>
  );
}

const styles2 = {
  viewport: {
    position: "fixed",
    inset: 0,
    perspective: "350px",
    overflow: "hidden",
    color: "#ffe81f",
    fontFamily: "Aspekta, sans-serif",
    fontWeight: 700,
    height: "90vh",
  },
  stars: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none",
  },
  star: () => {
    const size = Math.random() < 0.85 ? Math.random() * 1.8 + 0.8 : Math.random() * 2.6 + 1.4; // mostly small stars, some larger
    const hue = 50 + Math.random() * 20; // warm-ish white
    return {
      position: "absolute",
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      background: `hsl(${hue} 100% 90%)`,
      opacity: gsap.utils.random(0.35, 0.9),
      filter: "drop-shadow(0 0 6px rgba(255,255,200,0.6))",
    };
  },
  fade: {
    position: "absolute",
    inset: "0 0 auto 0",
    height: "30vh",
    zIndex: 2,
    pointerEvents: "none",
    background: "linear-gradient(#000 0%, transparent 60%)",
  },
  crawlPlane: {
    position: "absolute",
    inset: "auto 0 0 0",
    height: "120vh",
    transformStyle: "preserve-3d",
  },
  crawl: {
    maxWidth: "22em",
    margin: "0 auto",
    padding: "0 1rem",
    lineHeight: 1.7,
    transformOrigin: "50% 100%",
    transform: "rotateX(25deg) translateY(70vh)",
    textAlign: "justify",
    letterSpacing: "0.02em",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  title: { textAlign: "center", marginBottom: "1.5rem" },
  h1: { margin: "0 0 .25rem 0", fontSize: "1.75rem", letterSpacing: ".05em" },
  h2: {
    margin: 0,
    fontSize: "1rem",
    letterSpacing: ".2em",
    textTransform: "uppercase",
  },
  p: { textTransform: "uppercase", fontweight: 500, fontSize: "1.125rem" },
};
