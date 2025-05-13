import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Curriculum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [t, i18n] = useTranslation("global");
  const obtenerEnlaceCV = () => {
    const idioma = i18n.language;
    switch (idioma) {
      case "es":
        return "/cv/tony_vargas_cv_esp.pdf";
      case "cat":
        return "/cv/tony_vargas_cv_cat.pdf";
      case "en":
        return "/cv/tony_vargas_cv_eng.pdf";
      default:
        return "/cv/tony_vargas_cv_esp.pdf";
    }
  };
  return (
    <div className="page">
      <div className="education">
        <h2 className="heading">{t("Curriculum.education")}</h2>
      </div>
      <div className="services">
        {/* <div className="service">
          <h2>{t("Curriculum.master_ds")}</h2>
          <ul>
            <li>{t("Curriculum.master_ds_m1")}</li>
            <li>{t("Curriculum.master_ds_m2")}</li>
            <li>{t("Curriculum.master_ds_m3")}</li>
            <li>{t("Curriculum.master_ds_m4")}</li>
            <li>{t("Curriculum.master_ds_m5")}</li>
            <li>{t("Curriculum.master_ds_m6")}</li>
            <li>{t("Curriculum.master_ds_m7")}</li>
            <li>{t("Curriculum.master_ds_m8")}</li>
            <li>{t("Curriculum.master_ds_m9")}</li>
          </ul>
          <h2>{t("Curriculum.master_ds_school")}</h2>
        </div> */}
        <div className="service">
          <h2>{t("Curriculum.boot_camp_ds")}</h2>
          <ul>
            <li>{t("Curriculum.boot_camp_m1")}</li>
            <li>{t("Curriculum.boot_camp_m2")}</li>
            <li>{t("Curriculum.boot_camp_m3")}</li>
            <li>Python, PySpark, SQL</li>
            <li>Numpy, Pandas, Matplotlib, Seaborn, Plotly</li>
            <li>Scikit-learn, TensorFlow, Keras, NLTK, Spacy, OpenCV</li>
          </ul>
          <a
            href="../pdf/Diplomas_DSPP01-DataScience.pdf "
            target="_blank" ç
          >🔗Data Science</a>
          <h2>{t("Curriculum.boot_camp_school")}</h2>
        </div>
        <div className="service">
          <h2>{t("Curriculum.dam")}</h2>
          <ul>
            <li>{t("Curriculum.dam_m1")}</li>
            <li>{t("Curriculum.dam_m4")}</li>
            <li>{t("Curriculum.dam_m5")}</li>
            <li>{t("Curriculum.dam_m6")}</li>
            <li>{t("Curriculum.dam_m7")}</li>
          </ul>
          <a
            href="../pdf/Diploma_Dam.pdf "
            target="_blank"
          >🔗DAM</a>
          <h2>{t("Curriculum.unicas")}</h2>
        </div>
        <div className="service">
          <h2>{t("Curriculum.daw")}</h2>
          <ul>
            <li>{t("Curriculum.daw_m1")}</li>
            <li>{t("Curriculum.daw_m2")}</li>
            <li>{t("Curriculum.daw_m3")}</li>
          </ul>
          <a
            href="../pdf/Diploma_Daw.pdf "
            target="_blank"
          >🔗DAW</a>
          <h2>{t("Curriculum.consorci")}</h2>
        </div>
        <div className="service">
          <h2>{t("Curriculum.ds")}</h2>
          <ul>
            <li>{t("Curriculum.ds_1")}</li>
            <li>{t("Curriculum.ds_2")}</li>
            <li>{t("Curriculum.ds_3")}</li>
            <li>{t("Curriculum.ds_4")}</li>
            <li>{t("Curriculum.ds_5")}</li>
          </ul>
          <a
            href="../pdf/Fundamentals_Python_SQL.pdf "
            target="_blank"
          >🔗Data Science Fundamentals</a>
          <h2>{t("Curriculum.coursera")}</h2>
        </div>
        <div className="service">
          <h2>C2 - PROFICIENT ENGLISH CERTIFICATE (CEFR)</h2>
          <img width="200" src="/img/English.png" alt="English_Certificate" />
          <h2>C2 Proficient</h2>
           <a
            href="../pdf/EF SET Certificate.pdf "
            target="_blank"
          >🔗Certificate</a>
          <h2> EF Standard English Test (EF SET) (2023)</h2>
        </div>
        <div className="service">
          <h2>{t("Curriculum.bd2")}</h2>
          <ul>
            <li>{t("Curriculum.bd1_1")}</li>
            <li>{t("Curriculum.bd1_2")}</li>
            <li>{t("Curriculum.bd1_3")}</li>
            <li>{t("Curriculum.bd1_4")}</li>
            <li>{t("Curriculum.bd1_5")}</li>
            <li>{t("Curriculum.bd1_6")}</li>
          </ul>
          <a
            href="../pdf/BigData1.pdf "
            target="_blank"
          >🔗Big Data I</a>
          <a
            href="../pdf/BigData2.pdf "
            target="_blank"
          >🔗Big Data II</a>
          <h2>{t("Curriculum.ioe")}</h2>
        </div>
      </div>
      <div className="home">
        <article className="work-item2">
          <div className="cv">
            <h3>{t("Inicio.know")}</h3>

            <br />
            <a
              href={obtenerEnlaceCV()}
              download
              target="_blank"
              title="Descargar Currículum Vitae"
              alt="CV"
            >
              {t("Inicio.download")}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};
