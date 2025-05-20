import React from "react";
import Listado_London from "./Listado_London";
import { useTranslation } from "react-i18next";

export const London = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="page">
      <div className="education">
        <h2 className="heading">{t("Ciudad.Londres")}</h2>
      </div>
      <Listado_London />
    </section>
  );
};
