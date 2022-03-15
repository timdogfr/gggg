import React, { useState } from 'react'
import { HeroContainer, HeroBg,ImageBg, VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight,Button } from './HeroSection.elements';
function HeroSection() {


    const [hover,setHover]= useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <>
           <HeroContainer>
                <HeroContent>
                <ImageBg wid={40} src={"config/images/joking_jungle_cats.png"} />
                    <HeroP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </HeroP>
                </HeroContent>
           </HeroContainer> 
        </>
    )
}

export default HeroSection
