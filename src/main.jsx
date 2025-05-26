import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Se carga por defecto el modo claro
import { I18nextProvider } from "react-i18next";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_cat from "./translations/cat/global.json";
import global_ge from "./translations/ge/global.json";
import global_fr from "./translations/fr/global.json";
import global_it from "./translations/it/global.json";
import global_ko from "./translations/ko/global.json";
import global_ja from "./translations/ja/global.json";
import global_ru from "./translations/ru/global.json";


i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: { global: global_es },
    cat: { global: global_cat },
    en: { global: global_en },
    ge: { global: global_ge },
    fr: { global: global_fr },
    it: { global: global_it },
    ko: { global: global_ko },
    ja: { global: global_ja },
    ru: { global: global_ru },
  },
});

const Root = () => {


  return (
    <HelmetProvider> {/* Wrap with HelmetProvider */}
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </HelmetProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
