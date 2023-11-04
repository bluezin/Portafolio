import React from 'react';
import { FaInstagram, FaHeart } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="div-footer color-change-2x ">
      <p className="bluezin-footer">bluezin</p>
      <h1 className="me-encuentras">Mis redes sociales son: </h1>

      <a
        href="https://www.instagram.com/yadiracondezo/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaInstagram className="FaInstagram" />
      </a>
      <a
        href="https://github.com/bluezin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub className="AiFillGithub" />
      </a>
      <a
        href="https://twitter.com/YadiraCondezo"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiFillTwitterCircle className="FiTwitter" />
      </a>

      <p className="heart">
        Puedes revisar todos mis proyectos realizados entrando a mi perfil de
        github:
        <br />
        <a
          href="https://github.com/bluezin"
          target="_blank"
          className="link-github"
          rel="noopener noreferrer"
        >
          Cuenta de Github
        </a>
      </p>

      <p className="heart">
        Hecho por Yadira
        <FaHeart className="FiHeart" />
      </p>
    </div>
  );
};

export default Footer;
