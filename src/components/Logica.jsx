import React, { useState } from 'react';
import Contactame from './Contactame';

const Logica = ({ name }) => {
  const [booleano, setBooleano] = useState({
    isClosedOpen: false,
    name: '',
  });

  const handleOpen = () => {
    setBooleano({
      isClosedOpen: true,
    });
  };

  const handleClosed = () => {
    setBooleano({
      isClosedOpen: false,
    });
  };
  return (
    <div>
      <button className="Button-3" type="button" onClick={handleOpen}>
        {name}
      </button>
      {booleano.isClosedOpen ? (
        <Contactame handleClosed={handleClosed} />
      ) : null}
    </div>
  );
};

export default Logica;
