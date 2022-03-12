import React from 'react';
import { FaInstagram, FaHeart } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';
import '../styles/Footer.css';
// import gatito from '../imagenes/gatito.jpg';

const Footer = () => {
  return (
    <div className="div-footer color-change-2x ">
      {/* <img src={gatito} alt="" className="gatito-footer" /> */}
      <p className="bluezin-footer">bluezin</p>
      <h1 className="me-encuentras">Mis redes sociales son: </h1>

      <a
        href="
      https://github.com/bluezin
      "
      >
        <AiFillGithub className="AiFillGithub" />
      </a>
      <a href="https://www.instagram.com/yoisycondezo/?hl=es-la">
        <FaInstagram className="FaInstagram" />
      </a>
      <a href="https://twitter.com/YadiraCondezo">
        <AiFillTwitterCircle className="FiTwitter" />
      </a>

      <p className="heart">
        Puedes revisar todos mis proyectos realizados entrando a mi perfil de
        github:
        <br />
        <a href="https://github.com/bluezin" className="link-github">Cuenta de Github</a>
      </p>

      <p className="heart">
        Hecho con
        <FaHeart className="FiHeart" />
        por Yadira
      </p>
    </div>
  );
};

export default Footer;
