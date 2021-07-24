import styled from 'styled-components';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: --80px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10

    @media screen and (maxwidth: 960px)
    {
        transition: 0.8s all ease;
    }
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
export const Logo = styled.div`
    color:white;
    padding: 20px;
    font-family: sans-serif;
    font-size: 50px;
`

