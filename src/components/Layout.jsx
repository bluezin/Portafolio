/* eslint-disable no-console */
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Contactame from './Contactame';

const Layout = ({ children }) => {
  const [booleano, setBooleano] = useState({
    isClosedOpen: false,
  });

  // eslint-disable-next-line consistent-return
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
    <>
      <Header handleOpen={handleOpen} />
      {children}
      {booleano.isClosedOpen ? (
        <Contactame handleClosed={handleClosed} />
      ) : null}
      <Footer />
    </>
  );
};

export default Layout;
