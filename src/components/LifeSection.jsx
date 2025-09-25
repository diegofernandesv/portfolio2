import React, { useState, useEffect } from "react";
import "./LifeSection.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import AnimatedContent from "./AnimatedContent";
import { Link } from "react-router-dom";

const images = [image1, image2, image3, image4, image5];

function LifeSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedContent>
    <div className="life-section">
      <div className="life-content">
        <AnimatedContent>
        <img
          src={images[currentImageIndex]}
          alt="Life moments"
          className="life-image"
        />
        </AnimatedContent>
        <div className="life-text-content">
          <div className="life-main-text">
            But life is more than just pixels &amp; lines of code.
          </div>
          <Link to="/about" className="life-cta-button" aria-label="Get to know me better">
            <div className="life-cta-text">Get to know me better</div>
          </Link>
        </div>
      </div>
    </div>
    </AnimatedContent>
  );
}

export default LifeSection;
