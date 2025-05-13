import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Se carga por defecto el modo claro
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_cat from "./translations/cat/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: { global: global_es },
    cat: { global: global_cat },
    en: { global: global_en },
  },
});

const Root = () => {
 

  return (
    <I18nextProvider i18n={i18next}>      
      <App />
    </I18nextProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
