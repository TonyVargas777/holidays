// src/components/Ciudad.jsx
import React from "react";
import { useParams } from "react-router-dom";
import GetYourGuideActivitiesWidget from "./GetYourGuideActivitiesWidget";

export const Ciudad = () => {
  const { nombre } = useParams();

  return (
    <div className="ciudad-widget-container">
      <h2 className="text-2xl font-bold mb-4 text-center">{nombre}</h2>
      <GetYourGuideActivitiesWidget city={nombre} />
    </div>
  );
};
