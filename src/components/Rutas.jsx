import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Contexto from './Contexto';
import Layout from './Layout';
import Proyectos from './Proyectos';

const Rutas = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/context" component={Contexto} />
          <Route path="/proyectos" component={Proyectos} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Rutas;
