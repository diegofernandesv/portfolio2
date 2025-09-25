import React, { lazy, Suspense } from 'react';
import './SkiperIntro.css';
import SplitText from './SplitText';
import AnimatedContent from './AnimatedContent';

// Try to load the component installed by shadcn/ui (skiper48.tsx)
// Works whether it exports default or a named component
const Skiper48 = lazy(async () => {
  const mod = await import('@/components/skiper48');
  return { default: mod.default ?? mod.Skiper48 ?? mod };
});

export default function SkiperIntro() {
  const handleAnimationComplete = () => {
    // All letters have animated
    // console.log('All letters have animated!');
  };
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

        <SplitText
          text={
            'A 21-year-old guy from Venezuela with Portuguese roots, and currently studying Multimedia Design in Aarhus, Denmark. People often say that’s a long way from home, and they’re right. I still don’t know exactly how life brought me here, but I’m making the most of the experience.'
          }
          className="skiper-paragraph"
          delay={50}
          duration={0.55}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.15}
          rootMargin="-80px"
          textAlign="left"
          color="black"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

    </section>
    </AnimatedContent>
  );
}
