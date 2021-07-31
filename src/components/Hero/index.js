import React from 'react'
import video from '../../videos/waves.mp4';
import { HeroContainer, HeroBg, VideoEff, HeroContent, Heroh1, Heroul } from './HeroEl';
import { motion } from 'framer-motion';


function Hero(){

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.15}}exit={{opacity: 0}}>
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
        </motion.div>
    )
}

export default Hero;
