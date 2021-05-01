/* eslint-disable no-return-assign */
import React from 'react';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import fron from '../imagenes/from.jpg';

const Home = () => {
  return (
    <>
      <div className="home">
        <div>
          <div className="imagen-del-div">
            <img src={fron} alt="" className="imagen-home heartbeat" />
          </div>
        </div>
        <div className="conjunto">
          <div className="frase-div">
            <h1 className="frase">Si se puede imaginar se puede programar</h1>
          </div>
          <div className="div-home" id="cadenas-texto">
            <h1 className="name">Soy Yadira Condezo</h1>

            <p className="p-home">
              D
              <Typical
                steps={[
                  'esarrolladora Front-end',
                  1000,
                  'iseñadorora UI',
                  1000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </p>
          </div>
          <div className="Button-div-o">
            <Link
              to="/context"
              style={{ textDecoration: 'none', margin: 'auto' }}
            >
              <button className="Button-2" type="button">
                Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
