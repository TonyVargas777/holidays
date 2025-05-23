import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";
import { Ciudad } from "../components/Ciudad"; // ✅ Importa nuevo componente

export const MisRutas = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ciudad/:nombre" element={<Ciudad />} /> {/* ✅ Ruta dinámica */}
          <Route path="*" element={<h1 className="education">Error 404</h1>} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};
