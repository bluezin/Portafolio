import React from 'react';
import { ThemeProvider, Button } from '@chakra-ui/core';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/Contactame.css';

const Contactame = ({ handleClosed }) => {
  return (
    <>
      <div className="fixed">
        <div className="contactame">
          <div className="aiout">
            <AiOutlineClose onClick={handleClosed} className="ex" />
          </div>
          <h1 className="contac">Ponerse en contacto</h1>

          <div className="formulario">
            <form action="mailto:yadiraco304@gmail.com">
              <p className="p-contactame">Nombre</p>
              <input
                type="text"
                className="contactame-input"
                placeholder="Nombre"
                // name="Nombre "
                required
              />
              <p className="p-contactame">Email</p>
              <input
                type="text"
                className="contactame-input"
                placeholder="Email"
                // name="Email "
                required
              />
              <p className="p-contactame">Mensaje</p>
              <input
                type="text"
                className="mensaje"
                placeholder="Hello!"
                // name="Mensaje "
                required
              />
              <br />
              <ThemeProvider>
                <Button
                  leftIcon="email"
                  variantColor="teal"
                  variant="solid"
                  className="Button shake-horizontal"
                  type="submit"
                >
                  Enviar
                </Button>
              </ThemeProvider>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactame;
