import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";
import { Home } from "../components/Home";
import { Barcelona } from "../components/Barcelona";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/home" element={<Home />} />
          <Route path="/barcelona" element={<Barcelona />} />
          <Route path="*" element={<h1 className="home">Error 404</h1>} />
        </Routes>
      </section>

      <Footer />
    </BrowserRouter>
  );
};
