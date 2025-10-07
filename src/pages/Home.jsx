import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import SelectedWork from "../components/SelectedWork";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import { HowIWorkSection } from "../components/HowIWorkSection";
import LifeSection from "../components/LifeSection";
import Footer from "../components/Footer";

function Home() {
    const [heroHasCompleted, setHeroHasCompleted] = useState(false);

    const handleHeroAnimationComplete = () => {
        setHeroHasCompleted(true);
    };

    useEffect(() => {
        document.body.classList.add("scrollable");

        return () => {
            document.body.classList.remove("scrollable");
        };
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="hero-container">
                <Hero 
                    onAnimationComplete={handleHeroAnimationComplete} 
                    preventRestart={heroHasCompleted} 
                />
            </div>
            <div 
                className="after-hero" 
                style={{ marginTop: 0, width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}
            >
                <div style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
                    <AboutMe />
                    <SelectedWork />
                    <HowIWorkSection />
                    <LifeSection />
                </div>
            </div>
                <Footer/>
        </div>
    );
}

export default Home;
