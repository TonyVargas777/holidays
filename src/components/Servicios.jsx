import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";

export const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [t, i18n] = useTranslation("global");

  return (
    <div className="page">
      <div className="education">
        <h2 className="heading">{t("Servicios.title")}</h2>
      </div>
      <section className="services">
        <article className="service">
          <h2>{t("Servicios.title1")}</h2>
          <p>{t("Servicios.text1")}</p>
        </article>

        <article className="service">
          <h2>{t("Servicios.title2")}</h2>
          <p>{t("Servicios.text2")}</p>
        </article>

        <article className="service">
          <h2>{t("Servicios.title3")}</h2>
          <p>
          {t("Servicios.text3")}
          </p>
        </article>

        <article className="service">
          <h2>{t("Servicios.title4")}</h2>
          <p>
          {t("Servicios.text4")}
          </p>
        </article>

        <article className="service">
          <h2>{t("Servicios.title5")}</h2>
          <p>
          {t("Servicios.text5")}
          </p>
        </article>

        <article className="service">
          <h2>{t("Servicios.title6")}</h2>
          <p>
          {t("Servicios.text6")}
          </p>
        </article>
      </section>
    </div>
  );
};
