import React from 'react';

import { AboutContainer, AboutContent, AboutH1} from './AboutEl';



function About(){
    return (
        <>
        <AboutContainer id="about">
            <AboutH1>About Me</AboutH1>
            <AboutContent>I am a Web Dev Boot Camp student 
                who lives in Orlando, Florida. My story is a unique. I originally grew up 
                in New York City and recieved a bachelor's in legal studies. It was not until later
                on in my career in banking and insurance that I gained an interest in learning 
                how to program. Now, I am learning how to create responsive web applications
                with Javascript, HTML, and CSS. This website is made with React.js. I am looking 
                forward to creating more web applications in the future. Please feel free
                to take a look at the work I have done so far. </AboutContent>
        </AboutContainer>
        </>
    )
}

export default About;
