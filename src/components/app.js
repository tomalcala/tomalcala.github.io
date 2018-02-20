import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PageNotFound from './http_exceptions';
import Home from './home';
// import ExampleComponent from './ExampleComponent';
// import Breadcrumbs from './Breadcrumbs';

export default function App() {
  return (
    <div>
      <h1>Single Page Apps for GitHub Pages</h1>

      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>

      <div>
        <h2>Test App</h2>
      </div>
    </div>
  );
}
