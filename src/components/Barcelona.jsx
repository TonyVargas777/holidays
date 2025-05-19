import React from "react";
import { Listado_Barcelona } from "./Listado_Barcelona";
import { useTranslation } from "react-i18next";

export const Barcelona = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="page">
      <div className="education">
        <h2 className="heading">{t("Ciudad.Barcelona")}</h2>
      </div>
      <Listado_Barcelona />
    </section>
  );
};
