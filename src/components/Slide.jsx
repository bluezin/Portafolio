import React, { useState } from 'react';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import Card from './Card';
import '../styles/Slide.css';

const Slide = ({ proyects }) => {
  const [state, setState] = useState({ left: 0, right: 1 });

  return (
    <section className="Slide">
      <button
        type="button"
        onClick={() => {
          if (state.left === 0 || state.right === 1) return;
          setState({ left: state.left - 1, right: state.left });
        }}
      >
        <GoChevronLeft />
      </button>

      {proyects.slice(state.left, state.right).map((proyect, index) => (
        <Card {...proyect} key={Number(index)} />
      ))}

      <button
        type="button"
        onClick={() => {
          if (
            state.left === proyects.length - 1 ||
            state.right === proyects.length
          )
            return;

          setState({ left: state.right, right: state.right + 1 });
        }}
      >
        <GoChevronRight />
      </button>
    </section>
  );
};

export default Slide;
