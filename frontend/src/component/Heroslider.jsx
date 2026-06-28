import { useState, useEffect } from "react";
import "./HeroSlider.css";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

export default function HeroSlider() {
  const images = [banner1, banner2, banner3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="hero-slider">
      <img
        src={images[current]}
        alt="Banner"
        className="hero-image"
      />
    </div>
  );
}