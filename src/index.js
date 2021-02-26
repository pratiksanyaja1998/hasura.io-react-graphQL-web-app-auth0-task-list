import ReactDOM from "react-dom";
import React from "react";
import { Route, Router } from "react-router-dom";

import "./styles/App.css";

import { Auth0Provider } from "./components/Auth/react-auth0-spa";
import history from "./utils/history";
// import { AUTH_CONFIG } from "./components/Auth/auth0-variables";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const AUTH_CONFIG = {
  domain: 'spyhunter.us.auth0.com',
  clientId: '8Y8QIxJi3hz1lqci6KlLHFmDjhX5Lgba',
  callbackUrl: 'http://localhost:3000/callback',
  afterLogout: 'http://localhost:3000'
};

const mainRoutes = (
  <Router history={history}>
    <Route
      path="/"
      render={props => (
        <Auth0Provider
          domain={AUTH_CONFIG.domain}
          client_id={AUTH_CONFIG.clientId}
          redirect_uri={AUTH_CONFIG.callbackUrl}
          onRedirectCallback={onRedirectCallback}
        />
      )}
    />
  </Router>
);

ReactDOM.render(mainRoutes, document.getElementById("root"));
