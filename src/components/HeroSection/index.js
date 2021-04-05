import React, {useState} from 'react'
// import {Carousel} from 'react-bootstrap'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from 'react-bootstrap'

// import image1 from './../../images/image1.jpg'
// import image2 from './../../images/image2.jpg'
// import image3 from './../../images/image3.jpg'

const HeroSection = () => {
    // const [index, setIndex] = useState(0);
    // const handleSelect = (selectedIndex, e) => {
    // setIndex(selectedIndex);
    // };

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Best Life Medicals
                </HeroH1>
                <HeroP>
                    Bulk Billing Center
                </HeroP>
                <HeroBtnWrapper>
                    <Button to= 'home' onMouseEnter = {onHover} onMouseLeave = {onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />} </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;
