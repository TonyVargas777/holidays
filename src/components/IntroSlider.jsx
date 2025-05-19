import React, { useEffect, useState } from "react";
import "./IntroSlider.css";

const images = [
  "/img/sagrada_familia.avif",
  "/img/acuari_barcelona.avif",
  "/img/bus_turistic.avif",
  "/img/casa_batllo.avif",
  "/img/flamenco.avif",
  "/img/la_pedrera.avif",
  "/img/montserrat.avif",
  "/img/museu_barça.avif",
  "/img/park_guell.avif",
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
