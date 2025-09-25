import React from 'react';

import Header from '../components/Header';
import CrawlVelocityBoost from '../components/CrawlVelocityBoost';
import SkiperIntro from '../components/SkiperIntro';
import TikTokEmbed from '../components/TikTokEmbed';
import Footer from '../components/Footer';

function About() {
  return (
    <>
    <Header />
    <CrawlVelocityBoost />
    <SkiperIntro/>
    <TikTokEmbed url={import.meta.env.VITE_TIKTOK_VIDEO_URL} />
    <Footer />
    </>
  );
}

export default About;
