import React from "react";
import Listado_NewYork from "./Listado_NewYork";
import { useTranslation } from "react-i18next";

export const NewYork = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="page">
      <div className="education">
        <h2 className="heading">{t("Ciudad.NuevaYork")}</h2>
      </div>
      <Listado_NewYork />
    </section>
  );
};
