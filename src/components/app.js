import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PageNotFound from './http_exceptions';
import Home from './home';
// import ExampleComponent from './ExampleComponent';
// import Breadcrumbs from './Breadcrumbs';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
