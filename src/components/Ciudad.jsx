// src/components/Ciudad.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GetYourGuideActivitiesWidget from "./GetYourGuideActivitiesWidget";

export const Ciudad = () => {
  const { nombre } = useParams(); // This is the raw city name from URL
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format city name for display and meta tags (e.g., "nueva_york" -> "Nueva York")
  const formattedCityName = nombre
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  const siteName = t("Site.name", "Plan Your Holidays");
  const cityUrl = `https://www.tonyvargasdev.com/ciudad/${nombre}`;

  // Helper to create localized URLs for hreflang
  // Assuming city URL structure /ciudad/:nombre is the same for all langs
  const getLocalizedCityUrl = (lang) => {
    // If your routing includes lang in path, adjust here. E.g. `/${lang}/ciudad/${nombre}`
    return `https://www.tonyvargasdev.com/ciudad/${nombre}`;
  };
  
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

  const touristDestinationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": formattedCityName,
    "description": t("MetaTags.Ciudad.description", "Book exciting tours and activities in {cityName}.", { cityName: formattedCityName }),
    "url": cityUrl
    // "image": "URL to an image of the city, if available" // Optional
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": t("HeaderNav.home", "Home"), "item": getLocalizedHomeUrl(i18n.language) },
      { "@type": "ListItem", "position": 2, "name": formattedCityName }
    ]
  };
  
  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("MetaTags.Ciudad.title", "{cityName} Tours & Activities | Plan Your Holidays", { cityName: formattedCityName })}</title>
        <meta name="description" content={t("MetaTags.Ciudad.description", "Book exciting tours and activities in {cityName}.", { cityName: formattedCityName })} />
        <link rel="canonical" href={cityUrl} />

        {/* hreflang links */}
        <link rel="alternate" hreflang="es" href={getLocalizedCityUrl("es")} />
        <link rel="alternate" hreflang="en" href={getLocalizedCityUrl("en")} />
        <link rel="alternate" hreflang="ca" href={getLocalizedCityUrl("cat")} />
        <link rel="alternate" hreflang="fr" href={getLocalizedCityUrl("fr")} />
        <link rel="alternate" hreflang="de" href={getLocalizedCityUrl("ge")} />
        <link rel="alternate" hreflang="it" href={getLocalizedCityUrl("it")} />
        <link rel="alternate" hreflang="ko" href={getLocalizedCityUrl("ko")} />
        <link rel="alternate" hreflang="ja" href={getLocalizedCityUrl("ja")} />
        <link rel="alternate" hreflang="ru" href={getLocalizedCityUrl("ru")} />
        <link rel="alternate" hreflang="x-default" href={getLocalizedCityUrl("en")} />


        {/* Open Graph Tags */}
        <meta property="og:title" content={t("MetaTags.Ciudad.ogTitle", "{cityName} Adventures | {siteName}", { cityName: formattedCityName, siteName: siteName })} />
        <meta property="og:description" content={t("MetaTags.Ciudad.ogDescription", "Discover top attractions and book tours in {cityName}.", { cityName: formattedCityName })} />
        <meta property="og:image" content="https://www.tonyvargasdev.com/logoPYH.png" /> {/* Replace with city-specific image if available */}
        <meta property="og:url" content={cityUrl} />
        <meta property="og:type" content="website" /> 
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("MetaTags.Ciudad.twitterTitle", "Explore {cityName} with {siteName}", { cityName: formattedCityName, siteName: siteName })} />
        <meta name="twitter:description" content={t("MetaTags.Ciudad.twitterDescription", "Your next adventure in {cityName} starts here. Book tours and activities.", { cityName: formattedCityName })} />
        <meta name="twitter:image" content="https://www.tonyvargasdev.com/logoPYH.png" /> {/* Replace with city-specific image if available */}

        <script type="application/ld+json">{JSON.stringify(touristDestinationJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <div className="ciudad-widget-container">
        <h2 className="text-2xl font-bold mb-4 text-center">{formattedCityName}</h2>
        <GetYourGuideActivitiesWidget city={nombre} />
      </div>
    </>
  );
};
