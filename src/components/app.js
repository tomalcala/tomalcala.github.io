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
      <Interactive
        as="a"
        href="https://github.com/rafrex/spa-github-pages"
        {...s.link}
      >https://github.com/rafrex/spa-github-pages</Interactive>

    <nav>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>

      <div>
        <Interactive
          as="a"
          href="http://www.rafaelpedicini.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Code and concept by <span {...s.childLink}>Rafael Pedicini</span>
        </Interactive>
      </div>
    </div>
  );
}
