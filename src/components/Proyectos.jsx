import React from 'react';
import Slide from './Slide';
import proyects from '../data/index.json';
import '../styles/Proyectos.css';

const Proyectos = () => {
  return (
    <section className="Proyects" id="proyects">
      <h2 className="Proyects-title">Proyectos</h2>
      <Slide proyects={proyects} />
    </section>
  );
};

export default Proyectos;
