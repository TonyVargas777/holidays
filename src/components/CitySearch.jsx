// CitySearch.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Constante baseCities movida fuera del componente y renombrada
const BASE_CITIES = [
  // Europa
  "Ámsterdam", "Atenas", "Barcelona", "Berlín", "Bruselas", "Budapest", "Copenhague", "Dubrovnik", "Dublín", "Edimburgo",
  "Estambul", "Florencia", "Lisboa", "Londres", "Madrid", "Milán", "Múnich", "Oporto", "París", "Praga",
  "Roma", "San Petersburgo", "Sevilla", "Tallin", "Valencia", "Varsovia", "Viena", "Venecia", "Zúrich", "Niza",

  // América
  "Buenos Aires", "Cancún", "Cartagena", "Chicago", "Havana", "La Habana", "Las Vegas", "Lima", "Los Ángeles", "México DF",
  "Miami", "Montreal", "Nueva York", "Orlando", "Río de Janeiro", "San Francisco", "Santiago de Chile", "São Paulo", "Toronto", "Vancouver",

  // Asia
  "Bangkok", "Beijing", "Delhi", "Dubái", "Estambul", "Hanoi", "Hong Kong", "Jerusalén", "Kioto", "Kuala Lumpur",
  "Mumbai", "Osaka", "Pekín", "Seúl", "Shanghai", "Singapur", "Taipei", "Tel Aviv", "Tokio", "Ubud",

  // Oceanía
  "Auckland", "Brisbane", "Cairns", "Gold Coast", "Hobart", "Melbourne", "Queenstown", "Sidney", "Wellington", "Perth",

  // África
  "Ciudad del Cabo", "El Cairo", "Fez", "Johannesburgo", "Kampala", "Kigali", "Marrakech", "Nairobi", "Sharm el-Sheij", "Zanzíbar"
];

function normalize(text) {
  return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toUpperCase();
}

export const CitySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");

  const filteredCities = BASE_CITIES.filter(city =>
    normalize(t(`Ciudades.${city}`)).includes(normalize(searchTerm))
  );

  const handleSelect = (city) => {
    const normalizedCity = normalize(city).replace(/\s+/g, "_");
    navigate(`/ciudad/${encodeURIComponent(normalizedCity)}`);
  };

  return (
    <div className="city-search">
      <input
        type="text"
        placeholder={t("Buscar.Ciudad")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="city-search-input"
      />
      <ul>
        {filteredCities.map((city, index) => (
          <li key={index}>
            <button
              onClick={() => handleSelect(city)}
              className="city-select-button"
            >
              {t(`Ciudades.${city}`)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
