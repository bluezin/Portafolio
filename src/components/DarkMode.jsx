/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../styles/DarkMode.css';

function DarkMode() {
  const [foods, setFoods] = useState({
    booleano: false,
    color: 'white',
    colores: "black"
  });
  const handleChange = () => {
    console.log(foods);

    if (foods.color === 'white') {
      setFoods({
        booleano: true,
        color: 'black',
        colores: "white"
      });
      document.body.style.backgroundColor = foods.color;
      document.body.style.color = foods.colores;

    } else {
      setFoods({
        booleano: false,
        color: 'white',
        colores: "black"
      });
      document.body.style.backgroundColor = foods.color;
      document.body.style.color = foods.colores;

    }
  };
  return (
    <div className="DarkMode">
      <div className="div-dark">
        <input type="checkbox" id="checkbox" onChange={handleChange} className="input" />
        <label htmlFor="checkbox" className="switch" />
      </div>
    </div>
  );
}

export default DarkMode;
