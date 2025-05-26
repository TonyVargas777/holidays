import React, { useEffect, useState } from "react";
import "./IntroSlider.css";

const images = [
  "/img/sagrada_familia.avif",
  "/img/newyork2.avif",
  "/img/london3.jpeg",
  "/img/amsterdam.png",
  "/img/venecia.webp",
  "/img/estambul.jpg",
  "/img/vaticano.jpg",
  "/img/marrakech.jpeg",
  "/img/dubai.jpg",
  "/img/madrid1.avif",
  "/img/roma.jpg",
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
          alt="" // Changed alt text to empty string
          className={`slide ${index === current ? "active" : ""}`}
        />
      ))}
      <h1 className="intro-title">PLAN YOUR HOLIDAYS</h1>
    </div>
  );
};
