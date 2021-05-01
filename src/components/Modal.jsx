/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Modal = ({ name, title, linkGithub, linkVisit }) => {
  return (
    <div>
      <div className="todo-list-div">
        <a href={linkVisit} className="visitar">
          <img src={name} alt="" className="todo" />
        </a>
        <div className="Todo-List-css">
          <h1 className="todo-list-titulo">{title}</h1>
          <a href={linkGithub} className="visitar" target="_blank">
            <AiOutlineGithub
              style={{ fontSize: 30 }}
              className="AiOutlineGithub"
            />
            <p className="ir-al-codigo">Ir al codigo</p>
          </a>
          <br />
          <a href={linkVisit} className="visitar" target="_blank">
            <BsBoxArrowUpRight
              style={{ fontSize: 30 }}
              className="BsBoxArrowUpRight "
            />
            <p className="ir-al-codigo">Ir a visitar</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
