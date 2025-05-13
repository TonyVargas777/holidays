import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Es_Flag from "/public/spain_c.png";
import Cat_Flag from "/public/catalonia_c.png";
import En_Flag from "/public/usa_c.png";

export const HeaderNav = () => {
  const [t, i18n] = useTranslation("global");
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const currentLanguage = localStorage.getItem("language") || "es";

  const getCurrentFlag = () => {
    switch (currentLanguage) {
      case "es":
        return Es_Flag;
      case "cat":
        return Cat_Flag;
      case "en":
        return En_Flag;
      default:
        return Es_Flag;
    }
  };

  const languages = [
    { code: "es", label: "Spanish", flag: Es_Flag },
    { code: "cat", label: "Catalan", flag: Cat_Flag },
    { code: "en", label: "English", flag: En_Flag },
  ];

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Manejo del tema (dark/light)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <li>
        <NavLink to="/inicio" className="port">
          GET YOUR HOLIDAYS
        </NavLink>
      </li>
      <nav>
        <ul>
          <li>
            <NavLink to="/portafolio_dS" className={({ isActive }) => (isActive ? "active" : "")}>
              {"DATA"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/portafolio" className={({ isActive }) => (isActive ? "active" : "")}>
              {"WEB"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" className={({ isActive }) => (isActive ? "active" : "")}>
              {t("Curriculum.education")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" className={({ isActive }) => (isActive ? "active" : "")}>
              {t("HeaderNav.services")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
              {t("HeaderNav.contact")}
            </NavLink>
          </li>

          <div className="language-selector">
            <button onClick={toggleDropdown} className="dropdown-btn">
              <img src={getCurrentFlag()} alt="Current Language" width="24" height="24" />
            </button>
            {showDropdown && (
              <ul className="dropdown-menu">
                {languages
                  .filter((lang) => lang.code !== currentLanguage)
                  .map((lang) => (
                    <li key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                      <img width="24" height="24" src={lang.flag} alt={`${lang.label} Flag`} />
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Botón de cambio de tema */}
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          <img 
    src="/cambiar.png" 
    alt="Theme Toggle" 
    width="25" 
    height="20"
  />
          </button>
        </ul>
      </nav>
    </header>
  );
};
