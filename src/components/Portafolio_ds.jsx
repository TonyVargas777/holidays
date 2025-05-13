import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Portafolio_ds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [t, i18n] = useTranslation("global");

  const openVideoWindow = (videoSrc) => {
    window.open(videoSrc, "VideoWindow", "width=800,height=600");
  };

  return (
    <div className="page">
      <div className="education">
        <h1 className="heading">Data Science</h1>
      </div>
      <div className="services">
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/animales/python.jpg`}
              alt="PYTHON"
              onClick={() => openVideoWindow("/img/animales/Python.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2>PYTHON</h2>
            <p>{t("Portafolio_DS.python_text")}</p>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/TFM/escudo_bpd.png`}
              alt="PYTHON"
              onClick={() => openVideoWindow("/img/TFM/TFM_BPD.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2>{t("Portafolio_DS.TFM_title")}</h2>
            <p>{t("Portafolio_DS.TFM_text")}</p>
            <a
              href="https://github.com/TonyVargas777/Baltimore_Police_Department"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.TFM_link1")}
            </a>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <a
              href="https://monty-hall-tonyvargas777s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/img/Monty_Hall/MONTY-HALL.jpg`}
                alt="Monty Hall"
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
          <div className="datos">
            <h2>{t("Portafolio_DS.Monty_title")}</h2>
            <p>{t("Portafolio_DS.Monty_text")}</p>
            <a
              href="https://github.com/TonyVargas777/Monty_Hall.git"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.Monty_link1")}
            </a>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/ML/machine_learning.jpg`}
              alt="Machine Learning"
              onClick={() => openVideoWindow("/img/ML/Deep_Learning.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2>MACHINE LEARNING</h2>
            <p>{t("Portafolio_DS.ML_text")}</p>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/Unsupervised%20Learning.ipynb"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.ML_link1")}
            </a>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/DeepLearning.ipynb"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.ML_link2")}
            </a>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/NLP.ipynb"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.ML_link3")}
            </a>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/animales/fusion.png`}
              alt="PYTHON"
              onClick={() => openVideoWindow("/img/animales/Imágenes.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2>{t("Portafolio_DS.python_image_title")}</h2>
            <p>{t("Portafolio_DS.python_image_text")}</p>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/fusion.ipynb"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.python_ipynb_link")}
            </a>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/dog_green.ipynb"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.python_ipynb_link2")}
            </a>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/MySQL/mysql_inicio.jpg`}
              alt="mysql"
              onClick={() => openVideoWindow("/img/MySQL/My_SQL.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2>MY_SQL</h2>
            <p>{t("Portafolio_DS.mysql_text")}</p>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/tables.ipynb"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.mysql_link")}
            </a>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/estrella.png"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.mysql_link2")}
            </a>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/MongoDB/MongoDB.png`}
              alt="mongodb"
              onClick={() => openVideoWindow("/img/MongoDB/MongoDB.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2>MONGODB</h2>
            <p>{t("Portafolio_DS.mongoDB_text")}</p>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/compass1.png"
              target="_blank"
              className="no-format-link"
            >
              🔗MongoDb Compass
            </a>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/atlas1.png"
              target="_blank"
              className="no-format-link"
            >
              🔗MongoDB Atlas
            </a>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img src={`/img/Spark/spark_inicio.jpg`} alt="" />
            <img
              src={`/img/Spark/spark_inicio.jpg`}
              alt="mongodb"
              onClick={() => openVideoWindow("/img/Spark/PySpark.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2>SPARK</h2>
            <p>{t("Portafolio_DS.spark_text")}</p>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/PySpark.ipynb"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.spark_link")}
            </a>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/Airflow/Airflow_inicio.jpg`}
              alt="airflow"
              onClick={() => openVideoWindow("/img/Airflow/Airflow.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2>AIRFLOW</h2>
            <p>{t("Portafolio_DS.airflow_text")}</p>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/Airflow_graph.png"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.airflow_link")}
            </a>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/Airflow_inicio.png"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.airflow_link2")}
            </a>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/Airflow_log.png"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.airflow_link3")}
            </a>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img src={`/img/Docker/docker_inicio.png`} alt="" />
            <img
              src={`/img/Docker/docker_inicio.png`}
              alt="airflow"
              onClick={() => openVideoWindow("/img/Docker/Docker.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2>DOCKER</h2>
            <p>{t("Portafolio_DS.docker_text")}</p>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/Docker_containers.png"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.docker_link")}
            </a>
            <a
              href="https://github.com/TonyVargas777/recursos/blob/main/Data_Science_Portfolio/Docker_imagenes.png"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.docker_link2")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
