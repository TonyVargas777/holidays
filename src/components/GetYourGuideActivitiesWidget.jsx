// GetYourGuideActivitiesWidget.jsx
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const GetYourGuideActivitiesWidget = ({ city }) => {
  const { i18n } = useTranslation();
  const widgetRef = useRef(null);

  const getLocaleCode = (lang) => {
    switch (lang) {
      case "es": return "es-ES";
      case "en": return "en-US";
      case "cat": return "ca-ES";
      case "it": return "it-IT";
      case "fr": return "fr-FR";
      case "ge": return "de-DE";
      case "ko": return "ko-KR";
      case "ja": return "ja-JP";
      case "ru": return "ru-RU";
      default: return "en-US";
    }
  };

  const loadGYGScript = () => {
    if (!document.getElementById("gyg-widget-script")) {
      const script = document.createElement("script");
      script.id = "gyg-widget-script";
      script.src = "https://widget.getyourguide.com/dist/pa.umd.production.min.js";
      script.async = true;
      script.defer = true;
      script.setAttribute("data-gyg-partner-id", "QQKSFZJ");
      document.body.appendChild(script);
    } else {
      if (window.__gygWidgetLoader__) window.__gygWidgetLoader__();
    }
  };

  useEffect(() => {
    const localeCode = getLocaleCode(i18n.language);

    if (widgetRef.current) {
      widgetRef.current.innerHTML = "";

      const widget = document.createElement("div");
      widget.setAttribute("data-gyg-href", "https://widget.getyourguide.com/default/activities.frame");
      widget.setAttribute("data-gyg-locale-code", localeCode);
      widget.setAttribute("data-gyg-widget", "activities");
      widget.setAttribute("data-gyg-number-of-items", "12");
      widget.setAttribute("data-gyg-partner-id", "QQKSFZJ");
      widget.setAttribute("data-gyg-q", city.toLowerCase());

      widgetRef.current.appendChild(widget);
    }

    loadGYGScript();
  }, [city, i18n.language]);

  return <div className="gyg-wrapper"><div ref={widgetRef} className="gyg-widget-container"></div></div>;
};

export default GetYourGuideActivitiesWidget;
