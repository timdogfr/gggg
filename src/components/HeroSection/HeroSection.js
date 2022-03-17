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
                    <HeroP>Season 1 set records. Season 2 is here!  Get GOATED & grow with the Greatest community in NFTs. Mint now to join the movement. Welcome to the HERD! </HeroP>
                </HeroContent>
           </HeroContainer> 
        </>
    )
}

export default HeroSection
