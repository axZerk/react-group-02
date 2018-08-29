import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ArticlesPage from './pages/articles';
import ArticlePage from './pages/article';
import NotFoundPage from './pages/not-found';
import Navigation from './navigation';
import * as routes from '../constants/routes';
import './app.css';

const App = () => (
  <div className="App">
    <h1 className="App-title">React Router Basics</h1>

    <Navigation />

    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.ABOUT} component={AboutPage} />
      <Route exact path={routes.ARTICLES} component={ArticlesPage} />
      <Route path={`${routes.ARTICLES}/:articleId`} component={ArticlePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
