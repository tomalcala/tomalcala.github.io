import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  const repoReadmeLink = text => (
    <b>{text}</b>
  );

  return (
    <div>
      <p>
        This is an example single page app built
        with React and React&nbsp;Router using {' '}
        <b>BrowserRouter</b>. Navigate with the links below and
        refresh the page or copy/paste the url to test out the redirect
        functionality deployed to overcome GitHub&nbsp;Pages incompatibility
        with single page apps (like this one).
      </p>
      <p>
        Please see the {repoReadmeLink('repo readme')} for instructions on how to
        use this boilerplate to deploy your own single page app using GitHub Pages.
      </p>
      <div>
        <h2>Test Home</h2>
      </div>
    </div>
  );
}
