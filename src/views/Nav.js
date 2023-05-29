import React from 'react';

import { Navigation, Link } from './Nav.styles';
function Nav() {
  return (
    <Navigation>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/technologies">technologies</Link>
      <Link to="/projects">projects</Link>
      <Link to="/contact">contact</Link>
    </Navigation>
  );
}

export default Nav;
