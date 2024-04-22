import React, { useContext, useEffect }  from 'react'
import HeroSection from './HeroSection';
import tec_1 from '../assets/tec_1.jpg'
import { AppContext } from './Context';
import Services from './Services';
import Contact from './Contact';
import TestImonials from './TestImonials';

const Home = () => {
    const {upDateHomePage}=useContext(AppContext)
    useEffect(()=>{
      upDateHomePage()
    },[])
  return(
    <>
    <HeroSection />
    <Services />
    <TestImonials />
    <Contact />
    </>
    
    
  )
}

export default Home
