import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

import PageNotFound from './http_exceptions';
import Home from './home';
// import ExampleComponent from './ExampleComponent';
// import Breadcrumbs from './Breadcrumbs';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggled: false,
    };
  }

  toggleMenu() {
    this.setState({
      menuToggled: !this.state.menuToggled,
    });
  }

  resetMenu() {
    this.setState({
      menuToggled: false,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar is-dark is-fixed-top no-print" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/">
                <h1 className="title has-text-white">Tom Alcala</h1>
              </Link>
            </div>

            <div className="navbar-burger" role="button" onClick={() => this.toggleMenu()} data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={this.state.menuToggled ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start">
              <div className="navbar-item">
                <a href="#skills" className="button is-outlined is-primary is-rounded" onClick={() => this.resetMenu()}>Skills</a>
              </div>
              <div className="navbar-item">
                <a href="#experience" className="button is-outlined is-danger is-rounded" onClick={() => this.resetMenu()}>Experience</a>
              </div>
              <div className="navbar-item">
                <a href="#works" className="button is-outlined is-success is-rounded" onClick={() => this.resetMenu()}>Works</a>
              </div>
              <div className="navbar-item">
                <a href="#education" className="button is-outlined is-info is-rounded" onClick={() => this.resetMenu()}>Education</a>
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
}
