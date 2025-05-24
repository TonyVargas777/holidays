import { React, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className="education">
        <h2 className="heading">{t("Contacto.title")}</h2>
      </div>
      <section className="education">
        <br />
        <div align="center" className="redes_contacto">
          <article>
            <a href="https://www.getyourguide.com?partner_id=QQKSFZJ&cmp=share_to_earn"
              target="blank" alt="www.getyourguide.com?partner_id=QQKSFZJ&cmp=share_to_earn">
              <img
                className="red"
                align="center"
                src="email.png"
                alt="www.getyourguide.com?partner_id=QQKSFZJ&cmp=share_to_earn"
                height="40"
                width="40"
              ></img>
            </a>
          </article>
          <a href="https://www.getyourguide.com?partner_id=QQKSFZJ&cmp=share_to_earn" target="blank" alt="email" className="contacto_a">
            PlanYourHolidays
          </a>
        </div>
      </section>
    </>
  );
};
