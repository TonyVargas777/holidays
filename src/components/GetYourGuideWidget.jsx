import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const GetYourGuideMultiCityWidget = () => {
    const { i18n } = useTranslation();
    const widgetRefs = {
        barcelona: useRef(null),
        newyork: useRef(null),
        madrid: useRef(null),
        london: useRef(null),
    };

    const cityData = [
        { id: "45", name: "Barcelona", ref: widgetRefs.barcelona },
        { id: "59", name: "New York", ref: widgetRefs.newyork },
        { id: "46", name: "Madrid", ref: widgetRefs.madrid },
        { id: "57", name: "London", ref: widgetRefs.london },
    ];

  const getLocaleCode = (lang) => {
    switch (lang) {
      case "es":
        return "es-ES";
      case "en":
        return "en-US";
      case "cat":
        return "ca-ES";
      case "it":
        return "it-IT";
      case "fr":
        return "fr-FR";
      case "ge":
        return "de-DE";        
      default:
        return "en-US";
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
            if (window.__gygWidgetLoader__) {
                window.__gygWidgetLoader__();
            }
        }
    };

    useEffect(() => {
        const localeCode = getLocaleCode(i18n.language);

        cityData.forEach(({ id, ref }) => {
            if (ref.current) {
                ref.current.innerHTML = "";

                const widget = document.createElement("div");
                widget.setAttribute("data-gyg-href", "https://widget.getyourguide.com/default/city.frame");
                widget.setAttribute("data-gyg-location-id", id);
                widget.setAttribute("data-gyg-locale-code", localeCode);
                widget.setAttribute("data-gyg-widget", "city");
                widget.setAttribute("data-gyg-partner-id", "QQKSFZJ");
                widget.style.width = "100%";
                widget.style.minHeight = "600px";
                widget.style.marginBottom = "2rem";

                ref.current.appendChild(widget);
            }
        });

        loadGYGScript();
    }, [i18n.language]);

    return (
        <div className="works">
            <div className="work-item">
                <h3>Barcelona</h3>
                <div ref={widgetRefs.barcelona}></div>
            </div>
            <div className="work-item">
                <h3>New York</h3>
                <div ref={widgetRefs.newyork}></div>
            </div>
            <div className="work-item">
                <h3>Madrid</h3>
                <div ref={widgetRefs.madrid}></div>
            </div>
            <div className="work-item">
                <h3>London</h3>
                <div ref={widgetRefs.london}></div>
            </div>
        </div>
    );
};

export default GetYourGuideMultiCityWidget;
