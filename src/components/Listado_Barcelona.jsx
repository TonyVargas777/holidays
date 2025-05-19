import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import barcelona_data from "../data/barcelona_data";

export const Listado_Barcelona = ({ limite }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [t, i18n] = useTranslation("global");

  return (
  <section className="works">
  {barcelona_data.slice(0, limite).map((trabajo) => {
    const categoria = trabajo[`categoria_${i18n.language}`] || trabajo.categoria;
    const nombre = trabajo[`nombre_${i18n.language}`] || trabajo.nombre;
    

    return (
      <Link to={trabajo.url} target="blank" className="work-item" key={trabajo.id}>
        <article>
          <div className="mask">
            <img src={`/img/${trabajo.id}.avif`} alt={trabajo.id} />
          </div>

          <div className="datos">

            <span>{nombre}</span>

            <h2>
              <Link to={trabajo.url} target="blank">
                {categoria}
              </Link>
            </h2>

            <h3>{trabajo.ciudad}</h3>

          </div>
        </article>
      </Link>
    );
  })}
</section>
  );
};
