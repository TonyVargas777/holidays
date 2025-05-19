import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Es_Flag from "/public/spain_c.png";
import Cat_Flag from "/public/catalonia_c.png";
import En_Flag from "/public/usa_c.png";
import IdiomaIcon from "/public/idioma.png"; 

export const HeaderNav = () => {
  const [t, i18n] = useTranslation("global");
  const [showPopup, setShowPopup] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const currentLanguage = localStorage.getItem("language") || "es";

  const languages = [
    { code: "es", flag: Es_Flag },
    { code: "cat", flag: Cat_Flag },
    { code: "en", flag: En_Flag },
  ];

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setShowPopup(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="header">
      
        <img src="/tituloPYH.png" className="titulo" alt="PLAN YOUR HOLIDAYS" />
      
      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("HeaderNav.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/barcelona"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("Ciudad.Barcelona")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new_york"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("Ciudad.NuevaYork")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/madrid"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("Ciudad.Madrid")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/london"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("Ciudad.Londres")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("HeaderNav.contact")}
            </NavLink>
          </li>
      <div className="theme_language">
          {/* Botón para mostrar popup de idiomas */}
          <li>
            <button onClick={togglePopup} className="popup-btn">
              <img src={IdiomaIcon} alt="Idioma" width="24" height="24" />
            </button>
          </li>

          {/* Botón cambio de tema */}
          <li>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="popup-btn"
            >
              <img
                src="/cambiar.png"
                alt="Theme Toggle"
                width="24"
                height="24"
              />
            </button>
          </li>
          </div>
        </ul>
      </nav>

      {/* Popup para selector de idioma */}
      {showPopup && (
        <div className="language-popup">
          <div className="popup-content">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className="language-option"
                onClick={() => handleLanguageChange(lang.code)}
              >
                <img src={lang.flag} alt={lang.label} width="30" height="30" />
                <span>{lang.label}</span>
              </button>
            ))}
            <button className="close-popup" onClick={() => setShowPopup(false)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
