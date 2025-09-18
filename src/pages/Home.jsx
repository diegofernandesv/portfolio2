import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import SelectedWork from "../components/SelectedWork";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

function Home() {
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [heroAnimationsComplete, setHeroAnimationsComplete] = useState(false);

    const handleHeroAnimationComplete = () => {
        setShowAboutMe(true);
        setHeroAnimationsComplete(true);
        
        // Enable scrolling by adding a class to body
        document.body.classList.add("scrollable");
    };

    useEffect(() => {
        // Initially disable scrolling
        document.body.classList.remove("scrollable");
        
        return () => {
            // Cleanup on unmount
            document.body.classList.remove("scrollable");
        };
    }, []);

    return (
        <>
            <div className="hero-container">
                <Hero 
                    onAnimationComplete={handleHeroAnimationComplete} 
                    preventRestart={showAboutMe} 
                />
            </div>
            {showAboutMe && (
                <div className="after-hero" style={{ marginTop: 0, width: '100%' }}>
                    <AboutMe />
                    <SelectedWork />
                </div>
            )}
        </>
    );
}

export default Home;
