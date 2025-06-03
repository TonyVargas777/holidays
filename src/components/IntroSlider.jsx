import React, { useEffect, useState } from "react";
import "./IntroSlider.css";

const images = [
  "/img/sagrada_familia.webp",
  "/img/newyork2.webp",
  "/img/london3.webp",
  "/img/amsterdam.webp",
  "/img/venecia.webp",
  "/img/estambul.webp",
  "/img/vaticano.webp",
  "/img/marrakech.webp",
  "/img/dubai.webp",
  "/img/madrid1.webp",
  "/img/roma.webp",
];

export const IntroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro-slider">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`slide ${index === current ? "active" : ""}`}
        />
      ))}
      <a href="https://www.getyourguide.com?partner_id=QQKSFZJ&cmp=share_to_earn" target="_blank" rel="noopener noreferrer" className="intro-title">
      <h1 className="intro-title">PLAN YOUR HOLIDAYS</h1></a>
    </div>
  );
};
