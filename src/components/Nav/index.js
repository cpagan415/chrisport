import React from 'react';
//access to font awesome icons here: 
import { FaBars } from 'react-icons/fa';
import {Nav, NavContainer, Logo, NavMenu, MobileIcon, NavLinks, NavItem} from './NavbarEl';

function Navbar(props){
    const{
        portSelected,
        setPortSelected
      } = props;

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
                        <NavLinks to="about" onClick={() =>  setPortSelected(false)}>About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={() => setPortSelected(true)}>Portfolio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact" onClick={() =>  setPortSelected(false)}>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
        </>
  );
}

export default Navbar;
