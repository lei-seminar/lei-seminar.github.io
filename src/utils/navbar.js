import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './navbarUtils';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/presentation' activeStyle>
            Presentations
          </NavLink>
          <NavLink to='/readinglist' activeStyle>
            Reading List
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;