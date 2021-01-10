import SmartRural from '../pages/SmartRural/SmartRural';
import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';

const RouterSmartRural: React.FC = () => {

  return (
    <Route path="/smartrural/:name" component={SmartRural} exact />
  );
};

export default RouterSmartRural;
