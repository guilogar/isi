import Events from '../pages/Events/Events';
import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';

const RouterEvents: React.FC = () => {

  return (
    <Route path="/events/:name" component={Events} exact />
  );
};

export default RouterEvents;
