import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="frase-div">
        <h1 className="frase">Desarrolladora Frontend</h1>
      </div>
      <div className="Header-subcontainer">
        <a href="#about">Sobre Mi</a>
        <a href="#proyects">Proyectos</a>
        <a href="#technologies">Tecnologías</a>
      </div>
    </div>
  );
};

export default Header;
