import React, { useContext, useEffect } from 'react'
import HeroSection from './HeroSection';
import tec_2 from '../assets/tec_2.jpg'
import { AppContext } from './Context';

const About = () => {
    const {upDateAboutPage}=useContext(AppContext)

    useEffect(()=>{
      upDateAboutPage()
    })
  return <HeroSection />
  
}

export default About
