import React from 'react';
import Proyectos from './Proyectos';
import Contexto from './Contexto';
import Info from './Info';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <Contexto />
      <Proyectos />
      <Info />
    </div>
  );
};
export default Home;
