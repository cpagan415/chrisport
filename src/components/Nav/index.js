import React from 'react';
import {Nav, NavContainer, Logo} from './NavbarEl';

function Navbar() {
  return (
        <>
        <Nav>
            <NavContainer>
                <Logo to='/'>
                    CMP
                </Logo>
            </NavContainer>
        </Nav>
        </>
  );
}

export default Navbar;
