import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../constants/routes';
import './navigation.css';

const Nav = () => (
  <ul>
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
    <li>
      <NavLink
        to={routes.ARTICLES}
        className="Nav-link"
        activeClassName="Nav-link-active"
      >
        Articles
      </NavLink>
    </li>
  </ul>
);

export default Nav;
