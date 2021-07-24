import styled from 'styled-components';
//usin react router and react scroll here 
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 2;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24 px;
    max-width; 1100px;
`
export const Logo = styled(LinkS)`
    color:white;
    padding: 20px;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
`
//will not use this delete when finished
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px)
    {
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        height: 70%;
        font-size: 1.5rem;
        cursor: pointer;
        color: white;
    }
`  

export const NavMenu = styled.ul`
    display: flex;
    align-items: center; 
    list-style: none;
    margin-right: 10%;

    @media screen and (max-width: 768px)
    {
        display:none;
    }
`

export const NavItem = styled.li`
    height: 10px;
`

export const NavLinks = styled(LinkS)`
    color: white;
    display:flex;
    alignt-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 50%;
    cursor: pointer;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;

    &.active
    {
        border-bottom: 3px solid #01bf71;
    }

`



