import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

import PageNotFound from './http_exceptions';
import Home from './home';
// import ExampleComponent from './ExampleComponent';
// import Breadcrumbs from './Breadcrumbs';

export default function App() {
  return (
    <div>
      <nav className="navbar is-dark is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <h1 className="title has-text-white">Tom Alcala</h1>
            </Link>
          </div>
          <div className="navbar-burger">
            <a href="#skills" className="button is-outlined is-primary is-rounded">Skills</a>
            <a href="#experience" className="button is-outlined is-danger is-rounded">Experience</a>
            <a href="#works" className="button is-outlined is-success is-rounded">Works</a>
            <a href="#education" className="button is-outlined is-info is-rounded">Education</a>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <a href="#skills" className="button is-outlined is-primary is-rounded">Skills</a>
            </div>
            <div className="navbar-item">
              <a href="#experience" className="button is-outlined is-danger is-rounded">Experience</a>
            </div>
            <div className="navbar-item">
              <a href="#works" className="button is-outlined is-success is-rounded">Works</a>
            </div>
            <div className="navbar-item">
              <a href="#education" className="button is-outlined is-info is-rounded">Education</a>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
