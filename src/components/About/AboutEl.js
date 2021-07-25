import styled from 'styled-components';


export const AboutImg = styled.img`
    height: 250px;
    width: 290px;
    border-radius: 50%;
    margin-bottom: 90px;
`

export const AboutContainer= styled.div`
background: white;
display: flex;
flex-direction: column;
height: 720px;
align-items: center;
justify-content: center;
position: relative;
z-index: 1;
font-family: Oswald, sans-serif;

    @media screen and (max-width: 768px)
    {
        padding: 100px;
    }
`

export const AboutH1 = styled.h1`
    margin-bottom: 50px;
`

export const AboutContent= styled.div`
   width: 60%;
   text-align: center;
`