import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export const Inicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [t, i18n] = useTranslation("global");
  const dummyAttractions = [
    { id: "1", name: "Alhambra de Granada" },
    { id: "2", name: "Museo del Prado" },
  ];
  

  const obtenerEnlaceCV = () => {
    const idioma = i18n.language;
    switch (idioma) {
      case "es":
        return "/cv/tony_vargas_cv_esp.pdf";
      case "cat":
        return "/cv/tony_vargas_cv_cat.pdf";
      case "en":
        return "/cv/tony_vargas_cv_eng.pdf";
      default:
        return "/cv/tony_vargas_cv_esp.pdf";
    }
  };

  return (
      <div className="work-item">
        <h2>Atracciones turísticas</h2>
        <ul>
          {dummyAttractions.map((attraction) => (
            <li key={attraction.id}>
              <Link to={`/attraction/${attraction.id}`} className="text-blue-600 underline">
                {attraction.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }