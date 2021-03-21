import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MenuUrl } from './shared/enums/menuUrl';
import Logged from './features/logged';
import Login from './features/login';
import User from './features/user';
import Product from './features/product';
import Home from './features/home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path={MenuUrl.home} exact>
        <Logged><Home /></Logged>
      </Route>
      <Route path={MenuUrl.user} exact>
        <Logged><User /></Logged>
      </Route>
      <Route path={MenuUrl.product} exact>
        <Logged><Product /></Logged>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
