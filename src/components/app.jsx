import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '@shared/loading';
import AppBar from './app-bar';
import ProtectedRoute from '@shared/protected-route';
import * as routes from '../constants/routes';
import './app.css';

const AsyncHomePage = Loadable({
  loader: () => import('./pages/home' /* webpackChunkName: "home-page" */),
  loading: Loading,
});

const AsyncArticlesPage = Loadable({
  loader: () => import('./pages/articles'),
  loading: Loading,
});

const AsyncAboutPage = Loadable({
  loader: () => import('./pages/about'),
  loading: Loading,
});

const AsyncArticlePage = Loadable({
  loader: () => import('./pages/article'),
  loading: Loading,
});

const AsyncNotFoundPage = Loadable({
  loader: () => import('./pages/not-found'),
  loading: Loading,
});

const AsyncSignInPage = Loadable({
  loader: () => import('./pages/sign-in'),
  loading: Loading,
});

const AsyncSignUpPage = Loadable({
  loader: () => import('./pages/sign-up'),
  loading: Loading,
});

const App = ({ authenticated }) => (
  <div className="App">
    <AppBar />

    <Switch>
      <Route exact path={routes.HOME} component={AsyncHomePage} />
      <Route path={routes.ABOUT} component={AsyncAboutPage} />
      <ProtectedRoute
        exact
        path={routes.ARTICLES}
        component={AsyncArticlesPage}
        redirectTo={routes.SIGN_IN}
        authenticated={authenticated}
      />
      <ProtectedRoute
        path={`${routes.ARTICLES}/:articleId`}
        component={AsyncArticlePage}
        redirectTo={routes.SIGN_IN}
        authenticated={authenticated}
      />
      <Route path={routes.SIGN_UP} component={AsyncSignUpPage} />
      <Route path={routes.SIGN_IN} component={AsyncSignInPage} />
      <Route component={AsyncNotFoundPage} />
    </Switch>
  </div>
);

const mstp = state => ({
  authenticated: state.session.authenticated,
});

export default connect(mstp)(App);
