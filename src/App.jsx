import "./App.css";
import React, { useEffect } from "react";
import { MisRutas } from "./Router/MisRutas";
import BotonSubir from "../src/components/BotonSubir";
import { useTranslation } from "react-i18next";


function App() {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    // Recuperar el idioma almacenado en localStorage al cargar el componente
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <>
      <div className="layout">
        <MisRutas />
        <BotonSubir />
      </div>
    </>
  );
}

export default App;
