import styled from 'styled-components';


export const InfoContainer= styled.div`
background: white;
display: flex;
flex-direction: column;
height: 800px;
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

export const InfoH1 = styled.h1`
    margin-bottom: 50px;
`

export const InfoContent= styled.div`
   width: 60%;
   text-align: center;
`