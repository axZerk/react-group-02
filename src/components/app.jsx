import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ArticlesPage from './pages/articles';
import ArticlePage from './pages/article';
import NotFoundPage from './pages/not-found';
import SignInPage from './pages/sign-in';
import SignUpPage from './pages/sign-up';
import AppBar from './app-bar';
import ProtectedRoute from '@shared/protected-route';
import * as routes from '../constants/routes';
import './app.css';

const App = ({ authenticated }) => (
  <div className="App">
    <AppBar />

    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.ABOUT} component={AboutPage} />
      <ProtectedRoute
        exact
        path={routes.ARTICLES}
        component={ArticlesPage}
        redirectTo={routes.SIGN_IN}
        authenticated={authenticated}
      />
      <ProtectedRoute
        path={`${routes.ARTICLES}/:articleId`}
        component={ArticlePage}
        redirectTo={routes.SIGN_IN}
        authenticated={authenticated}
      />
      <Route path={routes.SIGN_UP} component={SignUpPage} />
      <Route path={routes.SIGN_IN} component={SignInPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

const mstp = state => ({
  authenticated: state.session.authenticated,
});

export default connect(mstp)(App);
