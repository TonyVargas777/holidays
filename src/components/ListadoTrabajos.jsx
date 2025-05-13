import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { trabajos } from "../data/trabajos";

export const ListadoTrabajos = ({ limite }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [t, i18n] = useTranslation("global");

  return (
    <section className="works">
      {trabajos.slice(0, limite).map((trabajo) => {
        const nombre = trabajo[`nombre_${i18n.language}`] || trabajo.nombre;
        const categorias = trabajo[`categorias_${i18n.language}`] || trabajo.categorias;

        return (
          <Link to={trabajo.url} target="blank" className="work-item">
          <article key={trabajo.id} >
            <Link to={trabajo.url} target="blank" className="work-item">
              <div className="mask">
                <img src={`/img/${trabajo.id}.avif`} alt={trabajo.id} />
              </div>
            </Link>
            <div className="datos">
              <span>{categorias}</span>
              <h2>
                <Link to={trabajo.url} target="blank">
                  {nombre}
                </Link>
              </h2>
              <h3>{trabajo.tecnologias}</h3>
            </div>
          </article>
          </Link>
        );
      })}
    </section>
  );
};
