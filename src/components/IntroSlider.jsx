import React, { useEffect, useState } from "react";
import "./IntroSlider.css";

const images = [
  "/img/sagrada_familia.avif",
  "/img/newyork1.jpg",
  "/img/madrid1.avif",
  "/img/london1.jpg",

  "/img/casa_batllo.avif",
  "/img/newyork2.avif",
  "/img/madrid2.avif",
  "/img/london2.jpg",

  "/img/la_pedrera.avif",
  "/img/newyork3.avif",
  "/img/madrid3.avif",
  "/img/london3.jpeg",

  "/img/park_guell.avif"  
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
      <h1 className="intro-title">PLAN YOUR HOLIDAYS</h1>
    </div>
  );
};
