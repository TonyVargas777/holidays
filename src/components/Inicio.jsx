// Inicio.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { IntroSlider } from "./IntroSlider";
import { useTranslation } from "react-i18next";
import { CitySearch } from "./CitySearch";

export const Inicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t, i18n } = useTranslation("global");
  const homeUrl = "https://www.tonyvargasdev.com/inicio";
  const siteName = t("Site.name", "Plan Your Holidays"); // Assuming Site.name is a translation key

  // Helper to create localized home URLs
  const getLocalizedHomeUrl = (lang) => {
    const base = "https://www.tonyvargasdev.com";
    // Use translated path if available, otherwise default to /inicio or /home for en
    let path = t(`HeaderNav.homeLink.${lang}`, { defaultValue: lang === "en" ? "/home" : "/inicio" });
    // Ensure path starts with a slash
    if (!path.startsWith("/")) {
        path = `/${path}`;
    }
    return `${base}${path}`;
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": "https://www.tonyvargasdev.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.tonyvargasdev.com/ciudad/{search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": siteName,
    "url": "https://www.tonyvargasdev.com",
    "logo": "https://www.tonyvargasdev.com/logoPYH.png",
    "description": t("MetaTags.Inicio.description", "Discover and book unforgettable tourist activities in Barcelona, Madrid, New York, and London with Plan Your Holidays.")
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("MetaTags.Inicio.title", "Plan Your Holidays | Book Your Getaway")}</title>
        <meta name="description" content={t("MetaTags.Inicio.description", "Discover and book unforgettable tourist activities in Barcelona, Madrid, New York, and London with Plan Your Holidays.")} />
        <link rel="canonical" href={getLocalizedHomeUrl(i18n.language)} />

        {/* hreflang links */}
        <link rel="alternate" hreflang="es" href={getLocalizedHomeUrl("es")} />
        <link rel="alternate" hreflang="en" href={getLocalizedHomeUrl("en")} />
        <link rel="alternate" hreflang="ca" href={getLocalizedHomeUrl("cat")} />
        <link rel="alternate" hreflang="fr" href={getLocalizedHomeUrl("fr")} />
        <link rel="alternate" hreflang="de" href={getLocalizedHomeUrl("ge")} />
        <link rel="alternate" hreflang="it" href={getLocalizedHomeUrl("it")} />
        <link rel="alternate" hreflang="ko" href={getLocalizedHomeUrl("ko")} />
        <link rel="alternate" hreflang="ja" href={getLocalizedHomeUrl("ja")} />
        <link rel="alternate" hreflang="ru" href={getLocalizedHomeUrl("ru")} />
        <link rel="alternate" hreflang="x-default" href={getLocalizedHomeUrl("en")} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={t("MetaTags.Inicio.ogTitle", "Plan Your Holidays | Your Next Adventure Starts Here")} />
        <meta property="og:description" content={t("MetaTags.Inicio.ogDescription", "Explore top destinations and book amazing activities with Plan Your Holidays.")} />
        <meta property="og:image" content="https://www.tonyvargasdev.com/logoPYH.png" />
        <meta property="og:url" content={getLocalizedHomeUrl(i18n.language)} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("MetaTags.Inicio.twitterTitle", "Plan Your Holidays | Adventure Awaits")} />
        <meta name="twitter:description" content={t("MetaTags.Inicio.twitterDescription", "Find and book your perfect holiday activities and tours worldwide.")} />
        <meta name="twitter:image" content="https://www.tonyvargasdev.com/logoPYH.png" />
        {/* <meta name="twitter:site" content="@yourtwitterhandle" /> */}
        {/* <meta name="twitter:creator" content="@yourtwitterhandle" /> */}

        <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(travelAgencyJsonLd)}</script>
      </Helmet>
      <div className="works">
        <IntroSlider />
        <div className="work-item">
          <CitySearch />
        </div>
      </div>
    </>
  );
};
