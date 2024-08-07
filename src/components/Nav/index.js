import React, { useState } from 'react';
//access to font awesome icons here: 
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavContainer, Logo, NavMenu, MobileIcon, NavLinks, NavItem } from './NavbarEl';
import MobileMenu from '../MobileMenu';
import { AnimatePresence } from 'framer-motion';


function Navbar() {

    const [isOpenMenu, setOpenMenu] = useState(false);

    const clickEvent = () => {
        setOpenMenu(!isOpenMenu)
    }


    return (
        <>
            <Nav>
                <NavContainer>
                    <Logo to="/" className="Logo" style={{ color: 'white' }}>
                        CM
                    </Logo>
                    <MobileIcon >
                        {isOpenMenu ? <FaTimes className="Fa" onClick={clickEvent} /> : <FaBars className="Fa" onClick={clickEvent} />}
                    </MobileIcon>
                    <AnimatePresence>
                        {isOpenMenu && <MobileMenu />}
                    </AnimatePresence>
                    <NavMenu  >
                        <NavItem>
                            <NavLinks to='/about' style={{ color: 'white' }}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/portfolio' style={{ color: 'white' }}>Portfolio</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    );
}

export default Navbar;
