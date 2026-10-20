import { useState, useEffect } from "react";
import style from "./App.module.css";

import logo from "./assets/Escudo_unach.png";
import concali1 from "./assets/concali/concali1.png";
import concali2 from "./assets/concali/concali2.png";
import concali3 from "./assets/concali/concali3.png";
import concali4 from "./assets/concali/concali4.png";
import concali5 from "./assets/concali/concali5.png";
import concali6 from "./assets/concali/concali6.png";
import concali7 from "./assets/concali/concali7.png";
import concali8 from "./assets/concali/concali8.png";

import Dashboard1 from "./assets/dashboard/Dashboard1.png";
import Dashboard2 from "./assets/dashboard/Dashboard2.png";
import Dashboard3 from "./assets/dashboard/Dashboard3.png";
import Dashboard4 from "./assets/dashboard/Dashboard4.png";
import Dashboard5 from "./assets/dashboard/Dashboard5.png";
import Dashboard6 from "./assets/dashboard/Dashboard6.png";
import Dashboard7 from "./assets/dashboard/Dashboard7.png";

import Paulo1 from "./assets/paulo/Paulo1.png";
import Paulo2 from "./assets/paulo/Paulo2.png";
import Paulo3 from "./assets/paulo/Paulo3.png";
import Paulo4 from "./assets/paulo/Paulo4.png";
import Paulo5 from "./assets/paulo/Paulo5.png";
import Paulo6 from "./assets/paulo/Paulo6.png";

import presentacion from "./assets/presentacion.jpeg"
import reactIcon from "./assets/react.png";
import nodeIcon from "./assets/nodejs.png";
import gitIcon from "./assets/git.png";
import pdfkit from "./assets/pdfkit.png";
import socket from "./assets/socket.png"
import html from "./assets/html.png"
import css from "./assets/css.png"
import js from "./assets/js.png"

import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { CiKeyboard } from "react-icons/ci";
import { IoSchoolSharp } from "react-icons/io5";

function App() {
  const [vista, setvista] = useState(0);

  const imagenesConcali = [
    concali1,
    concali2,
    concali3,
    concali4,
    concali5,
    concali6,
    concali7,
    concali8,
  ];

  const imagenesDasboard = [
    Dashboard1,
    Dashboard2,
    Dashboard3,
    Dashboard4,
    Dashboard5,
    Dashboard6,
    Dashboard7,
  ];

  const imagenesPauloF = [Paulo1, Paulo2, Paulo3, Paulo4, Paulo5, Paulo6];

  const [indice, setIndice] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndice((actual) => (actual + 1) % (vista === 1 ? imagenesConcali : vista === 2 ? imagenesDasboard : vista === 3 ? imagenesPauloF : [] ).length);
        setVisible(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalo);
  },);

  

  if (vista === 0) {
    return (
      <div className={style.body}>
        <div className={style.informacionPersonal}>
          <article className={style.fotoImage}>
            <img src={presentacion} width="400" />
          </article>
          <b style={{ fontSize: "20px" }}>
            DESARROLLADOR DE SOFTWARE Y PÁGINAS WEB
          </b>
          <p style={{ fontSize: "25px", margin: "30px 0px 0px 0px" }}>
            HERNÁN NATANIEL CANCINO ROBLES
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "100",
              margin: "10px 0px 40px 0px",
            }}
          >
            INGENIERÍA EN SISTEMAS COMPUTACIONALES
          </p>
          <section>
            <img src={logo} width={250} />
            <p>UNIVERSIDAD AUTÓNOMA DE CHIAPAS</p>
          </section>
        </div>
        <div className={style.experiencias}>
          <section className={style.paginasPersonales}>
            <a href="https://profile.indeed.com/">
              <SiIndeed className={style.icono} />
              <article className={style.content_title}>
                <p>PERFIL INDEED</p>
              </article>
            </a>
            <a href="https://github.com/HernanNCR" id={style.github}>
              <FaGithub className={style.icono} />
              <article className={style.content_title}>
                <p>PERFIL GITHUB</p>
              </article>
            </a>
            <a href="/CV.pdf" download="CV_HERNANCANCINO.pdf">
              <FaFileArrowDown className={style.icono} />
              <article className={style.content_title}>
                <p>DESCARGAR CV</p>
              </article>
            </a>
          </section>

          <section className={style.seccionExperiencias}>
            <article className={style.content_title_experiencias}>
              <b>EXPERIENCIA EN DESARROLLO</b>
            </article>
            <button onClick={() => setvista(1)}>
              <article className={style.content_img}>
                <FaDesktop className={style.icono} />
              </article>
              <article className={style.content_title}>
                <p>CONCALI</p>
              </article>
            </button>
            <button onClick={() => setvista(2)}>
              <article className={style.content_img}>
                <CiKeyboard className={style.icono} />
              </article>
              <article className={style.content_title}>
                <p>DASHBOARD</p>
              </article>
            </button>
            <button onClick={() => setvista(3)}>
              <article className={style.content_img}>
                <IoSchoolSharp className={style.icono} />
              </article>
              <article className={style.content_title}>
                <p>PAULO FREIRE</p>
              </article>
            </button>
          </section>
        </div>
      </div>
    );
  } else if (vista === 1) {
    return (
      <div className={style.body}>
        <div className={style.informacionPersonal}>
          {/* fotos e imagenesConcali */}
          <img
            src={imagenesConcali[indice]}
            className={`${style.imagen} ${
              visible ? style.visible : style.oculta
            }`}
            alt={`Imagen ${indice + 1}`}
          />
        </div>
        <div className={style.experiencias}>
          <section className={style.seccionExperiencias}>
            <h1>CONCALI</h1>
            <br />
            <article className={style.content_title_experiencias}>
              <b>OBJETIVO DEL PROYECTO</b>
              <p>
                CONCALI es una aplicación de escritorio que permite organizar
                información localmente, consultar historiales y facilitar tareas
                relacionadas con la selección de análisis, la administración de
                parámetros, la creación de etiquetas y la generación de
                documentos PDF, de acuerdo con los requerimientos definidos
                durante el desarrollo.
              </p>
            </article>

            <p>TECNOLOGÍAS DE DESARROLLO</p>
            <article>
              <img src={reactIcon} className={style.imgTecnologias} />
              <img src={nodeIcon} className={style.imgTecnologias} />
              <img src={gitIcon} className={style.imgTecnologias} />
              <img src={pdfkit} className={style.imgTecnologias} />
            </article>
            <button>DESCARGAR MANUAL DE USUARIO</button>
            <button onClick={()=> setvista(0)} style={{background: "#a8a028", width: "200px", height:"35px", fontSize: "15px"}}>REGRESAR</button>
          </section>
        </div>
      </div>
    );
  } else if (vista === 2) {
    return (
      <div className={style.body}>
        <div className={style.informacionPersonal}>
          {/* fotos e imagenes */}
          <img
            src={imagenesDasboard[indice]}
            className={`${style.imagen} ${
              visible ? style.visible : style.oculta
            }`}
            alt={`Imagen ${indice + 1}`}
          />
        </div>
        <div className={style.experiencias}>
          <section className={style.seccionExperiencias}>
            <h1>DASHBOARD WEB</h1>
            <br />
            <article className={style.content_title_experiencias}>
              <b>OBJETIVO DEL PROYECTO</b>
              <p>
                Permitir crear sesiones temporales donde un usuario pueda subir archivos y controlar qué contenido se muestra en OBS en tiempo real.
              </p>
            </article>

            <p>TECNOLOGÍAS DE DESARROLLO</p>
            <article>
              <img src={reactIcon} className={style.imgTecnologias} />
              <img src={nodeIcon} className={style.imgTecnologias} />
              <img src={gitIcon} className={style.imgTecnologias} />
              <img src={socket} className={style.imgTecnologias} />
            </article>
            <button>DESCARGAR MANUAL DE USUARIO</button>
            <button onClick={()=> setvista(0)} style={{background: "#a8a028", width: "200px", height:"35px", fontSize: "15px"}}>REGRESAR</button>
          </section>
        </div>
      </div>
    );
  } else if (vista === 3) {
    return (
      <div className={style.body}>
        <div className={style.informacionPersonal}>
          {/* fotos e imagenes */}
          <img
            src={imagenesPauloF[indice]}
            className={`${style.imagen} ${
              visible ? style.visible : style.oculta
            }`}
            alt={`Imagen ${indice + 1}`}
          />
        </div>
        <div className={style.experiencias}>
          <section className={style.seccionExperiencias}>
            <h1>SITIO WEB PAULO FREIRE</h1>
            <br />
            <article className={style.content_title_experiencias}>
              <b>OBJETIVO DEL PROYECTO</b>
              <p>
                Es una página informativa sobre el instituto internacional Paulo Freire, se incluyen los medios de contactos, beneficios, métodos de estudio y las carreras o diplomados que manejan, junto con la informacion de la institución
              </p>
            </article>

            <p>TECNOLOGÍAS DE DESARROLLO</p>
            <article>
              <img src={html} className={style.imgTecnologias} />
              <img src={css} className={style.imgTecnologias} />
              <img src={js} className={style.imgTecnologias} />

            </article>
            
            <button onClick={()=> setvista(0)} style={{background: "#a8a028", width: "200px", height:"35px", fontSize: "15px"}}>REGRESAR</button>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
