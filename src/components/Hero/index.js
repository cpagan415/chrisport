import React from 'react'
import video from '../../videos/forest.mp4';
import { HeroContainer, HeroBg, VideoEff, HeroContent, Heroh1, Heroul } from './HeroEl';

function Hero(){

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoEff autoPlay loop muted src={video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <Heroh1>Christina Mueller</Heroh1>
                <Heroul>
                <li><a onClick={() => window.open('https://www.linkedin.com/in/christina-pagan-19889b1aa/')}>LinkedIn</a></li>
                <li><a onClick={() => window.open('https://github.com/cpagan415')}>Github</a></li>
                <li>Contact</li>
                </Heroul>
            </ HeroContent>
        </HeroContainer>
    )
}

export default Hero;
