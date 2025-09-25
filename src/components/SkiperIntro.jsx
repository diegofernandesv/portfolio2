import React, { lazy, Suspense } from 'react';
import './SkiperIntro.css';
import SplitText from './SplitText';
import AnimatedContent from './AnimatedContent';
import StarBorder from './StarBorder';
import TikTokEmbed from './TikTokEmbed';

// Try to load the component installed by shadcn/ui (skiper48.tsx)
// Works whether it exports default or a named component
const Skiper48 = lazy(async () => {
  const mod = await import('@/components/skiper48');
  return { default: mod.default ?? mod.Skiper48 ?? mod };
});

export default function SkiperIntro() {
  const handleAnimationComplete = () => {};
  const style={ marginBottom:24 };
  return (
    <AnimatedContent>
      <section className="skiper-intro" aria-labelledby="skiper-intro-title">
        <div className="skiper-left">
          <Suspense fallback={<div className="skiper-fallback">Loading…</div>}>
            <Skiper48 />
          </Suspense>
        </div>
        <div className="skiper-right">
          <SplitText
            style={{ marginBottom: 24 }}
            text="Hola, I’m Diego"
            tag="h2"
            className="skiper-heading"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <div className="skiper-paragraph">
            <p style={style}>
              A 21-year-old guy from Venezuela with Portuguese roots, and currently studying Multimedia Design in Aarhus, Denmark. People often say that’s a long way from home, and they’re right. I still don’t know exactly how life brought me here, but I’m making the most of the experience.
            </p>
            <p  style={style}>
              My design journey began during the pandemic when I wanted graphics for my sports Instagram. After my brother got me a Domestika course, I started experimenting in Photoshop and eventually sold my first design for $3. That small step sparked my passion and led me to where I am now, creating user-centered designs that are simple, engaging, and original. At Business Academy Aarhus, I also discovered how much I enjoy combining design with coding, building websites, apps, and interactive experiences that bring ideas to life.
            </p>
            <p    style={style}>
              Outside of designing and coding, I’m a football fan (Real Madrid forever, Cristiano Ronaldo is my GOAT), I enjoy swimming, the gym, and traveling, Denmark is actually the third country I’ve lived in. I also run my personal brand, Fdez.UXUI, where I share design insights on TikTok, with some videos already reaching over 100K views.
            </p>
            <p    style={style}>
              If I had to live by one phrase, it would be: “Life is all about the experience.” That’s how I see design, challenges, and everything in between — as opportunities to grow and learn.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          </div>
          <div style={{ marginTop: 12, width: '100%' }}>
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}
