import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppContext } from './Context';
const HeroSection = () => {
  const {title,name,image,info}=useContext(AppContext)
  return (
    <div className='home'>
        <div className='row'>
            <div className='col1' data-aos="fade-up-right" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <h3>{title}</h3>
                <h1>{name}</h1>
                <p>{info}</p>
                <button type='button'><Link to={'/contact'}>Contact Me</Link></button>
            </div>
            <div className='col2' data-aos="fade-up-left" data-aos-duration="1200"
    data-aos-easing="ease-in-out">
                <img src={image} alt="" width={"400px"} height={"400px"}/>
            </div>

        </div>
        

      
    </div>
  )
}

export default HeroSection
