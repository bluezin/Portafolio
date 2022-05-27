import React from 'react';
import '../styles/Info.css';

const Info = () => {
  return (
    <div className="Info" id="technologies">
      <h2>Tecnologías que manejo</h2>
      <div className="Info-container">
        <strong>Frontend - Skills</strong>
        <div className="sub-div">
          <p>Html</p>
          <p>React</p>
          <p>Javascript</p>
          <p>Git</p>
          <p>Sass</p>
          <p>Css</p>
          <p>Typescript</p>
          <p>Tailwind</p>
          <p>Styled Components</p>
          <p>Redux</p>
          <p>Material UI</p>
          <p>Context</p>
        </div>
      </div>

      <div className="Info-container">
        <strong>Backend - Skills</strong>
        <div className="sub-div">
          <p>Ruby on Rails</p>
          <p>Heroku</p>
          <p>Postgresql</p>
          <p>SQL</p>
          <p>Un poco de Express</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
