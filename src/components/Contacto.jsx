import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t, i18n } = useTranslation("global");
  const contactUrl = "https://www.tonyvargasdev.com/contacto";
  const siteName = t("Site.name", "Plan Your Holidays");

  // Helper to create localized URLs for hreflang
  // Assuming contact URL structure /contacto is the same for all langs
  const getLocalizedContactUrl = (lang) => {
    // If your routing includes lang in path, adjust here. E.g. `/${lang}/contacto`
    // For now, assuming all languages use /contacto
    const base = "https://www.tonyvargasdev.com";
    // Example: if your contact page path changes per language
    // switch (lang) {
    //   case "es": return `${base}/contacto`;
    //   case "en": return `${base}/contact`; 
    //   default: return `${base}/contacto`;
    // }
    return `${base}/contacto`;
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("MetaTags.Contacto.title", "Contact Us | Plan Your Holidays")}</title>
        <meta name="description" content={t("MetaTags.Contacto.description", "Get in touch with Plan Your Holidays for any inquiries or support.")} />
        <link rel="canonical" href={getLocalizedContactUrl(i18n.language)} />

        {/* hreflang links */}
        <link rel="alternate" hreflang="es" href={getLocalizedContactUrl("es")} />
        <link rel="alternate" hreflang="en" href={getLocalizedContactUrl("en")} />
        <link rel="alternate" hreflang="ca" href={getLocalizedContactUrl("cat")} />
        <link rel="alternate" hreflang="fr" href={getLocalizedContactUrl("fr")} />
        <link rel="alternate" hreflang="de" href={getLocalizedContactUrl("ge")} />
        <link rel="alternate" hreflang="it" href={getLocalizedContactUrl("it")} />
        <link rel="alternate" hreflang="ko" href={getLocalizedContactUrl("ko")} />
        <link rel="alternate" hreflang="ja" href={getLocalizedContactUrl("ja")} />
        <link rel="alternate" hreflang="ru" href={getLocalizedContactUrl("ru")} />
        <link rel="alternate" hreflang="x-default" href={getLocalizedContactUrl("en")} />


        {/* Open Graph Tags */}
        <meta property="og:title" content={t("MetaTags.Contacto.ogTitle", "Contact Plan Your Holidays")} />
        <meta property="og:description" content={t("MetaTags.Contacto.ogDescription", "Reach out to us for help planning your next adventure.")} />
        <meta property="og:image" content="https://www.tonyvargasdev.com/logoPYH.png" />
        <meta property="og:url" content={getLocalizedContactUrl(i18n.language)} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />


        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("MetaTags.Contacto.twitterTitle", "Contact Us - Plan Your Holidays")} />
        <meta name="twitter:description" content={t("MetaTags.Contacto.twitterDescription", "Questions or feedback? Contact the Plan Your Holidays team.")} />
        <meta name="twitter:image" content="https://www.tonyvargasdev.com/logoPYH.png" />
      </Helmet>
      <div className="education">
        <h2 className="heading">{t("Contacto.title")}</h2>
      </div>
      <section className="education">
        <br />
        <div align="center" className="redes_contacto">
          <article>
            <a
              href="https://www.getyourguide.com?partner_id=QQKSFZJ&cmp=share_to_earn"
              target="_blank" // Corrected target
              rel="noopener noreferrer" // Added rel
              alt="GetYourGuide" // Changed alt text
            >
              <img
                className="red"
                align="center"
                src="email.png"
                alt="GetYourGuide" // Changed alt text
                height="40"
                width="40"
              ></img>
            </a>
          </article>
          <a
            href="https://www.getyourguide.com?partner_id=QQKSFZJ&cmp=share_to_earn"
            target="_blank" // Corrected target
            rel="noopener noreferrer" // Added rel
            alt="email"
            className="contacto_a"
          >
            PlanYourHolidays
          </a>
        </div>
      </section>
    </>
  );
};
