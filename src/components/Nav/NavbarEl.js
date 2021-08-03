import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    background: #000;
    height: 100px;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 2;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 150px;
    z-index: 1;
    width: 100%;
    `

export const Logo = styled(Link)`
    color:white;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
`
//will not use this delete when finished
export const MobileIcon = styled.div`
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
        padding: 10px;
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
    padding: 80px;

    @media screen and (max-width: 768px)
    {
        margin-top: 10px;
        padding-top: 40px;
        height: 100px;
    }
`

export const NavLinks = styled(Link)`
    color: white;
    display:flex;
    alignt-items: center;
    text-decoration: none;
    padding: 0 0.2rem;
    height: 50%;
    cursor: pointer;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;

`
