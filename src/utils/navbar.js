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
          <h3 style={{paddingTop: "0.3em", paddingRight: "1em", color: "#ffffff"}}>
            Large Language Models: Reading Group
          </h3>
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
