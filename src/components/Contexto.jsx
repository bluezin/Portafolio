/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CgMail } from 'react-icons/cg';
import { AiFillPhone, AiFillHtml5 } from 'react-icons/ai';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMaterialUi } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';

import yadira from '../imagenes/yadira.jpg';
import '../styles/Contexto.css';
import Logica from './Logica';

const Contexto = () => {
  return (
    <>
      <div className="div-contexto flip-in-hor-bottom ">
        <div className="sobre-mi">
          <h1 className="frase-sobre">Sobre mí</h1>
          <p className="contexto-p">
            Mi nombre es yadira condezo , tengo 17 años, soy de Perú . Yo soy
            frontend developer, me encanta el mundo de la programación, inicie
            hace un año y medio aproximadamente, y día a día sigo aprendiendo y
            es lo emocionante de esta carrera que nunca se para de aprender.
          </p>
          <p>
            Si lo que buscas es una frontend developer para realizar landing
            page app, aplicaciones, paginas web, o si necesitas consumir alguna
            API, este es el lugar correcto.
          </p>
          <p>
            <AiFillPhone className="AiFillPhone" />
            +51 994 107 561
          </p>
          <p>
            <CgMail className="CgMail" />
            yadiraco304@gmail.com
          </p>
        </div>

        <div>
          <img src={yadira} alt="" className="yadira" />
        </div>
      </div>
      <div className="titulo">
        <h1 className="tengo">Tengo conocimiento en :</h1>
      </div>
      <div className="conocimiento">
        <AiFillHtml5 className="Blue" />
        <DiCss3 className="Blue" />
        <FaReact className="Blue" />
        <SiJavascript className="Blue" />
        <SiMaterialUi className="Blue" />
        <FaGitAlt className="Blue" />
      </div>
      <Logica name="Contáctame " />
    </>
  );
};

export default Contexto;
