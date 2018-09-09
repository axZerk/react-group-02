import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';
import './navigation.css';

const PublicLinks = () => (
  <Fragment>
    <li>
      <NavLink
        exact
        to={routes.HOME}
        className="Nav-link"
        activeClassName="Nav-link-active"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.ABOUT}
        className="Nav-link"
        activeClassName="Nav-link-active"
      >
        About
      </NavLink>
    </li>
  </Fragment>
);

const PrivateLinks = () => (
  <Fragment>
    <li>
      <NavLink
        to={routes.ARTICLES}
        className="Nav-link"
        activeClassName="Nav-link-active"
      >
        Articles
      </NavLink>
    </li>
  </Fragment>
);

const Nav = ({ authenticated, ...rest }) => (
  <ul className="Nav">
    <PublicLinks />
    {authenticated && <PrivateLinks />}
  </ul>
);

const mstp = state => ({
  authenticated: state.session.authenticated,
});

export default compose(
  withRouter,
  connect(
    mstp,
    null,
  ),
)(Nav);
