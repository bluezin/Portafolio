import React, { useState } from 'react';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import Card from './Card';
import Pathway from '../images/pathway-intermediates-five.jpg';
import Artifact from '../images/artifact-store.jpg';
import Bookmark from '../images/bookmark-landing.jpg';
import Veride from '../images/veride.jpg';
import '../styles/Slide.css';

const data = [
  {
    title: 'Pathway',
    linkGithub: 'https://github.com/bluezin/pathway-intermediates',
    linkVisit: 'https://pathway-intermediates-five.vercel.app/home',
    image: Pathway,
    description:
      'Es una pagina que hice para Pathway, aun esta en proceso, esta hecho en React, Next, CSS Module :)',
  },
  {
    title: 'Artifact Store',
    linkGithub: 'https://github.com/bluezin/Artifact-store',
    linkVisit: 'https://artifact-store-mu.vercel.app/',
    image: Artifact,
    description:
      'Es un challenge que realice de la empresa de Airolab, use React, axios, Sass, Javascript, Context.',
  },
  {
    title: 'Bookmark (Landing-page)',
    linkGithub: 'https://github.com/bluezin/Bookmark-landing-page',
    linkVisit: 'https://bookmark-landing-page-tau-amber.vercel.app/',
    image: Bookmark,
    description: 'Es una landing page, realisada con puro CSS y HTML',
  },
  {
    title: 'Veride',
    linkGithub: 'https://github.com/bluezin/C4-30-front',
    linkVisit: 'https://veride.netlify.app/',
    image: Veride,
    description:
      'Es un ecommerce para un restaurante vegetariano que se trabajo en equipo. Utilice tecnologías como React, Ruby on Rails, Material Ui, Postgresql, Context.',
  },
  {
    title: 'Instagram',
    linkGithub: 'https://github.com/bluezin/Instagram',
    linkVisit: 'https://www.loom.com/share/8ddb48acd09b43d9ae77771067cdcdd8',
    image:
      'https://res.cloudinary.com/dzkhw6nzm/image/upload/v1653675702/smpluyvgk2wyt2r3lilv.png',
    description:
      'Es un clon de Instagram, utilice tecnologías como React, Ruby on Rails, SQL, Tailwind.',
  },
];

const Slide = () => {
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

      {data.slice(state.left, state.right).map((proyect, index) => (
        <Card {...proyect} key={Number(index)} />
      ))}

      <button
        type="button"
        onClick={() => {
          if (state.left === data.length - 1 || state.right === data.length)
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
