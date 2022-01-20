import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForard, ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Made Easy</HeroH1>
            <HeroP>
                Sign up for a new account today and recieve $203 in credit towards your next payment
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true"
                    smooth={true} duration={500}
                    spy={true} exact='true'>
                    Get Started {hover ? <ArrowForard /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>;
};

export default HeroSection;
