import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 78vh;
    position: relative;
    z-index: 1;
`


export const HeroBg=  styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    with: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoEff = styled.video`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
`


export const HeroContent = styled.div`
    z-index: 3;
    maxwidth: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Oswald, sans-serif;
    top: 0;
    margin-top: 250px;
    `

export const Heroh1 = styled.h1`
        color: white;
        font-size: 60px;
        text-align: center;
       

        @media screen and (max-width: 768px)
        {
            font-size: 40px;
        }

    `

export const Heroul = styled.ul`
        color: white;
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 100%;
        font-size: 20px;

`