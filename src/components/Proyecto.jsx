import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";

export const Proyecto = () => {
  const [proyecto, setProyecto] = useState({});
  const params = useParams();
  useEffect(() => {
    let proyecto = trabajos.filter((trabajo) => trabajo.id === params.id);
    setProyecto(proyecto[0]);
  }, []);
  return (
    <section className="page page-work">
      <h1 className="heading">Proyecto: {proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <a href={proyecto.url} target="_blank">
        Ir al Proyecto
      </a>
      <div className="mask">
        <img src={"/src/components/img/" + proyecto.id + ".png"} />
      </div>
    </section>
  );
};
