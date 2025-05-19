import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IntroSlider } from "./IntroSlider";
import { useTranslation } from "react-i18next";
import GetYourGuideWidget from "./GetYourGuideWidget";

export const Inicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [t, i18n] = useTranslation("global");
  // const dummyAttractions = [
  //   { id: "1", name: "Alhambra de Granada" },
  //   { id: "2", name: "Museo del Prado" },
  // ];




  return (
    <div className="works">
      <IntroSlider />

      <GetYourGuideWidget />

      {/* <img src="img/home.avif" className="home_img" alt="home" />         */}
      {/* <h2>Atracciones turísticas</h2>
        <ul>
          {dummyAttractions.map((attraction) => (
            <li key={attraction.id}>
              <Link to={`/attraction/${attraction.id}`} className="text-blue-600 underline">
                {attraction.name}
              </Link>
            </li>
          ))}
        </ul> */}
    </div>
  );
}