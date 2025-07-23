import React from 'react';
import './hero.scss'; 
import hero_image from "../../assets/hero.png"

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-text-content">
          <p className="platform-text">NEXT GENARETION PLATFORM</p>
          <h1 className="hero-headline">
            Artificial intelligence <br /> & Syber security
          </h1>
          <p className="hero-description">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">▶ Watch Video</button>
          </div>
        </div>
        <div className="hero-image-content">
          <div className="image-placeholder">
           <img src={hero_image} alt="hero" />
          </div>
        </div>
      </div>
      <div className="logos-section">
          <div className="logo-placeholder">Logoipsum Tech&Co.</div>
          <div className="logo-placeholder">Logo Ipsum</div>
          <div className="logo-placeholder">logoipsum</div>
          <div className="logo-placeholder">logoipsum</div>
      </div>
    </div>
  );
};

export default Hero;