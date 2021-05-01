/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import gatito from '../imagenes/gatito.jpg';

const Header = ({ handleOpen }) => {
  return (
    <div className="div-mayor">
      <div className="div">
        <Link to="/" className="a">
          Inicio
        </Link>
        <Link to="/context" className="a">
          Sobre Mi
        </Link>
        <Link className="a" to="/proyectos">
          Proyectos
        </Link>
        <Link className="a" onClick={handleOpen}>
          Contactame
        </Link>
      </div>
      <img src={gatito} alt="gatito" className="img-header" />
      <br />
      <span className="span">bluezin</span>
    </div>
  );
};

export default Header;
