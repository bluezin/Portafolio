import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import '../styles/Card.css';

const Card = ({ image, title, linkGithub, linkVisit, description }) => {
  return (
    <div className="Card">
      <img src={image} alt={title} className="Card-image" />
      <div className="Card-subcontainer">
        <div className="Card-title">
          <h2>{title}</h2>

          <div>
            <a href={linkGithub} target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub />
            </a>
            <a href={linkVisit} target="_blank" rel="noopener noreferrer">
              <BsBoxArrowUpRight />
            </a>
          </div>
        </div>

        <i className="Card-description">{description}</i>
      </div>
    </div>
  );
};

export default Card;
