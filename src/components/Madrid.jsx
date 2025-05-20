import React from "react";
import Listado_Madrid from "./Listado_Madrid";
import { useTranslation } from "react-i18next";

export const Madrid = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="page">
      <div className="education">
        <h2 className="heading">{t("Ciudad.Madrid")}</h2>
      </div>
      <Listado_Madrid />
    </section>
  );
};
