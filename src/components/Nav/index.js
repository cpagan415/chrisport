import React from 'react';
//access to font awesome icons here: 
import { FaBars } from 'react-icons/fa';
import {Nav, NavContainer, Logo, NavMenu, MobileIcon, NavLinks, NavItem} from './NavbarEl';

function Navbar() {
  return (
        <>
        <Nav>
            <NavContainer>
                <Logo to="home">
                    CMP
                </Logo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="portfolio">Portfolio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
        </>
  );
}

export default Navbar;
