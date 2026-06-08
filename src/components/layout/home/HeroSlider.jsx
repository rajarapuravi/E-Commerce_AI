import React from "react";
import "./HeroSlider.css";

function HeroSlider() {
  return (
    <div className="hero-slider">
      <img
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        alt="banner"
      />

      <div className="hero-content">
        <h1>RCBK Mega Sale</h1>
        <p>Up To 70% OFF</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default HeroSlider;