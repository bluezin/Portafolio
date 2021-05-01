import React from 'react';
import Typical from 'react-typical';

const Welcome = () => {
  return (
    <div>
      <h1>Hola!!!!</h1>
      <p>Soy Yadira Condezo</p>
      <span> Bienvenido: </span>
      <p>
        <Typical steps={['Welcome!!', 1000]} loop={Infinity} wrapper="b" />
      </p>
    </div>
  );
};

export default Welcome;
