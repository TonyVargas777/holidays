// Inicio.jsx
import React, { useEffect } from "react";
import { IntroSlider } from "./IntroSlider";
import { useTranslation } from "react-i18next";
import { CitySearch } from "./CitySearch";

export const Inicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [t] = useTranslation("global");

  return (
    <div className="works">
      <IntroSlider />
      <div className="work-item">
        <CitySearch />
      </div>
    </div>
  );
};
