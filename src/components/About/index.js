import React from 'react';
import pic from '../../images/ProfilePic.jpg'
import { AboutImg } from './AboutEl';
import { InfoContainer, InfoContent, InfoH1} from '../InfoStyle/infostyle';



function About(){
    return (
        <>
        <InfoContainer id="about">
            <InfoH1>About Me</InfoH1>
            <AboutImg src={pic} />
            <InfoContent>I am a Web Dev Boot Camp student 
                who lives in Orlando, Florida. I am currently learning
                 how to design responsive web pages with React. I currently 
                 work at a major retail store chain and my aspirations is to one 
                 day gain employment somewhere in the tech space.</InfoContent>
        </InfoContainer>
        </>
    )
}

export default About;
