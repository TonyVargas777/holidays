import React from "react";
import { ListadoTrabajos } from "./ListadoTrabajos";
import { useTranslation } from "react-i18next";

export const Portafolio = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section className="page">
      <div className="education">
      <h2 className="heading">{t("Portafolio.title")}</h2>
      </div>
      <ListadoTrabajos />
    </section>
  );
};
