/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import calcu from '../imagenes/calcu.jpg';
import rick from '../imagenes/rick.jpg';
import pokeapi from '../imagenes/pokeapi.jpg';
import bookmark from '../imagenes/bookmark.jpg';
import todo from '../imagenes/todo.jpg';
import store from '../imagenes/store.png';
import rockPaper from '../imagenes/rockPaper.png';
import manage from '../imagenes/manage.png';
import '../styles/Proyectos.css';
import Modal from './Modal';

const Proyectos = () => {
  return (
    <>
      <h1 className="proyectos">Proyectos</h1>
      <div className="Proyectos-content scale-up-center">
        <div className="div-pro">
          <div>
            <Modal
              name={bookmark}
              title="Bookmark (Landing-page)"
              linkGithub="https://github.com/bluezin/Bookmark-landing-page"
              linkVisit="https://bookmark-landing-page-tau-amber.vercel.app/"
            >
              <a href="https://github.com/bluezin/Bookmark-landing-page">
                <img src={bookmark} alt="" className="postres" />
              </a>
            </Modal>

            <p className="content-p">
              Es una landing Page, lo realize con Html y css.
              <br />
              <br />
              <a
                href="https://bookmark-landing-page-tau-amber.vercel.app/"
                className="a-proyectos"
                target="_blank"
              >
                Ir al sitio
                <FiArrowRight className="AiOutlineDoubleRight heartbeat" />
              </a>
            </p>
            {/*  */}
            <Modal
              name={todo}
              title="Todo List"
              linkGithub="https://github.com/bluezin/todo-list-with-react"
              linkVisit="https://todo-list-blue.vercel.app/"
            >
              <a href="https://todo-list-blue.vercel.app/">
                <img src={todo} alt="" className="todo" />
              </a>
            </Modal>

            <p className="c">
              Es un todo-list en donde puedes en listar tus tareas , esta echa
              con React.
              <br />
              <br />
              <a
                href="https://todo-list-blue.vercel.app/"
                className="a-proyectos"
                target="_blank"
              >
                Ir al sitio
                <FiArrowRight className="AiOutlineDoubleRight heartbeat" />
              </a>
            </p>
            {/*  */}
            <Modal
              name={calcu}
              title="Calculadora"
              linkGithub="https://github.com/bluezin/Calculadora"
              linkVisit="https://react-calck.vercel.app"
            >
              <a href="https://react-calck.vercel.app">
                <img src={calcu} alt="" className="calcu p" />
              </a>
            </Modal>

            <p className="content-p">
              Es calculadora elaborada con React
              <br />
              <br />
              <a
                href="https://react-calck.vercel.app"
                className="a-proyectos"
                target="_blank"
              >
                Ir al sitio
                <FiArrowRight className="AiOutlineDoubleRight heartbeat" />
              </a>
            </p>
            <Modal
              name={manage}
              title="Manage (Landing-page)"
              linkGithub="https://github.com/bluezin/Manage-Landing-Page"
              linkVisit="https://manage-landing-page-omega-murex.vercel.app/"
            >
              <a href="https://github.com/bluezin/Manage-Landing-Page">
                <img src={manage} alt="" className="postres" />
              </a>
            </Modal>

            <p className="content-p">
              Es una landing Page, lo realize con Html y css.
              <br />
              <br />
              <a
                href="https://manage-landing-page-omega-murex.vercel.app/"
                className="a-proyectos"
                target="_blank"
              >
                Ir al sitio
                <FiArrowRight className="AiOutlineDoubleRight heartbeat" />
              </a>
            </p>
          </div>

          <div className="espacio">
            <Modal
              name={rick}
              title="Rick and Morty"
              linkGithub="https://github.com/bluezin/Riky-and-Morty"
              linkVisit="https://riky-and-morty.vercel.app/"
            >
              <a href="https://riky-and-morty.vercel.app/">
                <img src={rick} alt="" className="imagenes" />
              </a>
            </Modal>
            <p className="content-p ricki">
              Utilice una API de Rick and Morty , contiene un buscador, y buton
              <br />
              con el cual puedes tener mas personajes.
              <br />
              <br />
              <a
                href="https://riky-and-morty.vercel.app/"
                className="a-proyectos"
                target="_blank"
              >
                Ir al sitio
                <FiArrowRight className="AiOutlineDoubleRight heartbeat" />
              </a>
            </p>
            <Modal
              name={pokeapi}
              title="Pokeapi"
              linkGithub="https://github.com/bluezin/Pokedex"
              linkVisit="https://pokedex-snowy.vercel.app/"
            >
              <a href="https://github.com/bluezin/Pokedex">
                <img src={pokeapi} alt="" className="postres" />
              </a>
            </Modal>

            <p className="content-p">
              Es una pokeApi , lo realize con React y tambien utilice la api de
              pokedex.
              <br />
              <br />
              <a
                href="https://pokedex-snowy.vercel.app/"
                className="a-proyectos"
                target="_blank"
              >
                Ir al sitio
                <FiArrowRight className="AiOutlineDoubleRight heartbeat" />
              </a>
            </p>
            {/*  */}
            <Modal
              name={store}
              title="Artifact Store"
              linkGithub="https://github.com/bluezin/Artifact-store"
              linkVisit="https://artifact-store.vercel.app/"
            >
              <a href="https://github.com/bluezin/Artifact-store">
                <img src={store} alt="" className="postres" />
              </a>
            </Modal>

            <p className="content-p">
              Es un challenge que realice de la empresa Aerolab
              <br />
              <br />
              <a
                href="https://artifact-store.vercel.app/"
                className="a-proyectos"
                target="_blank"
              >
                Ir al sitio
                <FiArrowRight className="AiOutlineDoubleRight heartbeat" />
              </a>
            </p>
            {/*  */}
            <Modal
              name={rockPaper}
              title="Rock-paper-scissors"
              linkGithub="https://github.com/bluezin/Rock-paper-scissors"
              linkVisit="https://rock-paper-scissors-rouge-psi.vercel.app/"
            >
              <a href="https://github.com/bluezin/Rock-paper-scissors">
                <img src={rockPaper} alt="" className="postres" />
              </a>
            </Modal>

            <p className="content-p">
              Es un juego muy divertido, papel o tijeras.
              <br />
              <br />
              <a
                href="https://rock-paper-scissors-rouge-psi.vercel.app/"
                className="a-proyectos"
                target="_blank"
              >
                Ir al sitio
                <FiArrowRight className="AiOutlineDoubleRight heartbeat" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
