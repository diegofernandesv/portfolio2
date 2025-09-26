// CrawlVelocityBoost.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarBorder from "./StarBorder";
import soundtrack from "../assets/starwarsmusic.mp3";
import { text } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

export default function CrawlVelocityBoost() {
  const rootRef = useRef(null);
  const crawlRef = useRef(null);
  const tlRef = useRef(null);
  const boostRef = useRef(0);
  const directionRef = useRef(1); // 1 forward, -1 reverse
  const viewportRef = useRef(null);
  const starsRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize audio volume once the element mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
    }
    return () => {
      if (audioRef.current) {
        try { audioRef.current.pause(); } catch (_) {}
      }
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;

      const isPhone =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(max-width: 480px)").matches;

      // ===== Star twinkle =====
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

      // ===== Crawl timeline =====
      tlRef.current = gsap.timeline({
        repeat: 0,
        onComplete: () => {
          if (viewportRef.current)
            gsap.set(viewportRef.current, { autoAlpha: 0, pointerEvents: "none" });
        },
      });

      // Make the total crawl longer on phones for readability.
      const baseDuration = isPhone ? 85 : 60;
      tlRef.current.fromTo(
        crawlRef.current,
        { y: "70vh" },
        { y: "-180vh", duration: baseDuration, ease: "none" }
      );

      // ===== Speed / boost model (gentler on mobile) =====
      const baseSpeed = isPhone ? 0.35 : 1;
      const maxBoost = isPhone ? 2.0 : 10; // hard cap on phones
      const decay = isPhone ? 0.88 : 0.94; // faster decay on phones
      const SCROLL_MAP = isPhone ? 900 : 350; // more velocity needed on phones
      const MAX_TIMESCALE = isPhone ? 2.4 : 6; // absolute clamp
      const LERP = isPhone ? 0.12 : 0.2; // smoothing factor

      let tsTarget = baseSpeed;

      // Apply boost each tick (keep a named fn so we can remove it)
      const tick = () => {
        if (!tlRef.current) return;
        if (prefersReduced) {
          tlRef.current.timeScale(1);
          return;
        }
        // decay the boost
        boostRef.current *= decay;
        if (boostRef.current < 0.001) boostRef.current = 0;

        // smooth & clamp the target timescale
        tsTarget = directionRef.current * (baseSpeed + boostRef.current);
        tsTarget = gsap.utils.clamp(-MAX_TIMESCALE, MAX_TIMESCALE, tsTarget);

        const tsNow = tlRef.current.timeScale();
        const tsNext = gsap.utils.interpolate(tsNow, tsTarget, LERP);
        tlRef.current.timeScale(tsNext);
      };
      gsap.ticker.add(tick);

      // ===== ScrollTrigger =====
      let st = ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: "bottom bottom",
        onLeave: () => {
          if (viewportRef.current)
            gsap.set(viewportRef.current, { autoAlpha: 0, pointerEvents: "none" });
          tlRef.current && tlRef.current.pause();
        },
        onEnter: () => {
          if (viewportRef.current)
            gsap.set(viewportRef.current, { autoAlpha: 1, pointerEvents: "auto" });
          tlRef.current && tlRef.current.play();
        },
        onEnterBack: () => {
          if (viewportRef.current)
            gsap.set(viewportRef.current, { autoAlpha: 1, pointerEvents: "auto" });
          tlRef.current && tlRef.current.play();
        },
        onUpdate(self) {
          if (prefersReduced) return;

          const v = self.getVelocity(); // + down, - up
          const DEADZONE = isPhone ? 70 : 30; // bigger on phones

          if (v > DEADZONE) {
            directionRef.current = 1;
          } else if (v < -DEADZONE) {
            // Prevent reverse on phones to reduce nausea
            directionRef.current = isPhone ? 1 : -1;
          } else {
            directionRef.current = 1;
          }

          const extra = gsap.utils.clamp(0, maxBoost, Math.abs(v) / SCROLL_MAP);
          // Nudge boost quickly but non-jankily
          gsap.to(boostRef, {
            duration: 0.15,
            current: extra,
            onUpdate: () => {
              boostRef.current = Math.max(boostRef.current, extra);
            },
          });
        },
      });

      // ===== OPTIONAL: mobile scrub mode (perfect readability) =====
      // Toggle this flag if you prefer scroll-scrub on phones instead of velocity boost.
      const MOBILE_SCRUB_MODE = false;
      if (isPhone && MOBILE_SCRUB_MODE) {
        // kill velocity-driven trigger
        st.kill();
        st = ScrollTrigger.create({
          trigger: rootRef.current,
          start: "top top",
          end: "bottom+=200% bottom",
          scrub: 0.6, // smooth follow
          onUpdate(self) {
            const p = gsap.utils.clamp(0, 1, self.progress);
            tlRef.current?.progress(p);
          },
        });
        // In scrub mode keep timescale steady
        tlRef.current.timeScale(1);
      }

      // Cleanup
      return () => {
        gsap.ticker.remove(tick);
        st && st.kill();
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
          .crawl-vb { font-size: 2rem; line-height: 1.9; }
          .crawl-vb h1 { font-size: 2rem; }
          .crawl-vb h2 { font-size: 2rem; letter-spacing: .25em; }
          .crawl-vb p  { font-size: 2rem; }
        }
      `}</style>

      {/* Fixed viewport */}
      <div ref={viewportRef} style={styles2.viewport}>
        {/* Hidden audio element + toggle button */}
        <audio ref={audioRef} src={soundtrack} preload="auto" loop />
        <div style={{ position: 'absolute', bottom: 12, right: 48, zIndex: 20, pointerEvents: 'auto' }}>
          <StarBorder
            as="button"
            onClick={async () => {
              if (!audioRef.current) return;
              try {
                if (audioRef.current.paused) {
                  await audioRef.current.play();
                  setIsPlaying(true);
                } else {
                  audioRef.current.pause();
                  setIsPlaying(false);
                }
              } catch (_) {}
            }}
            aria-pressed={isPlaying}
            title={isPlaying ? 'Pause soundtrack' : 'Play soundtrack'}
          >
            {isPlaying ? 'Pause music' : 'Play music'}
          </StarBorder>
        </div>
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
              <h1 style={styles2.h1}>
                It is a dark time for the Rebellion and a confusing time for recruiters…
              </h1>
            </div>
            <p>This person actually went into my about me page. Not sure why, but hola amigo.</p>
            <p>
              I finally managed to finish my portfolio. It took way longer than I expected, but
              here it is at last.
            </p>
            <p>
              What I didn’t realize is that a portfolio is never truly finished. It keeps changing,
              breaking, and getting redesigned forever.
            </p>
            <p>
              The funny part? I’m not even that big of a Star Wars fan. I just thought this would
              be a cool way to start my about me section.
            </p>
            <p>
              And seriously… why are you still reading this? Scroll down already — the real stuff
              is waiting.
            </p>
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
    const size =
      Math.random() < 0.85 ? Math.random() * 1.8 + 0.8 : Math.random() * 2.6 + 1.4; // mostly small stars, some larger
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
    maxWidth: "28em",
    margin: "0 auto",
    padding: "0 1rem",
    lineHeight: 1.7,
    transformOrigin: "50% 100%",
    transform: "rotateX(25deg) translateY(70vh)",
    letterSpacing: "0.02em",
    fontWeight: 600,
    textTransform: "uppercase",
    textAlign: "center",
  },
  title: { textAlign: "center", marginBottom: "1.5rem" },
  h1: { margin: "0 0 .25rem 0", fontSize: "1.75rem", letterSpacing: ".05em" },
  h2: { margin: 0, fontSize: "1rem", letterSpacing: ".2em", textTransform: "uppercase" },
  p: { textTransform: "uppercase", fontWeight: 500, fontSize: "1.125rem" },
};
