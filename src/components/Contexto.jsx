import React from 'react';
import { CgMail } from 'react-icons/cg';
import { AiFillPhone } from 'react-icons/ai';
import Typical from 'react-typical';
import yadira from '../images/yadira.jpg';
import cv from '../images/YadiraCondezoCV.pdf';
import '../styles/Contexto.css';

const Contexto = () => {
  return (
    <div className="Contexto" id="about">
      <div className="yadira">
        <div className="technologies">
          <img src={yadira} alt="yadira" />

          <p className="technologies-1">Tecnologías que domino:</p>

          <p className="p-home">
            <Typical
              steps={[
                'React',
                1000,
                'Css',
                1000,
                'Javascript',
                1000,
                'Typescript',
                1000,
                'Sass',
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
        </div>
      </div>
      <div className="sobre-mi">
        <h1 className="frase-sobre">Hola, me llamo Yadira!!</h1>
        <p>
          Soy Desarrolladora Frontend, mas de 1 año y medio en el mundo de la
          programacíon, en donde he podido aprender y crecer más
          profesionalmente, si buscas una Desarrolladora Frontend puede que yo
          sea tu opción :).
          <br />
          PSDT: Tengo muchos proyectos en mi github!, puedes darles un
          vistazo!!!!
        </p>

        <div className="cv">
          <a download href={cv}>
            Descarga mi CV
          </a>
        </div>

        <p className="phone">
          <AiFillPhone className="AiFillPhone" />
          +51 994 107 561
        </p>
        <p className="mail">
          <CgMail className="CgMail" />
          yadiraco304@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contexto;
