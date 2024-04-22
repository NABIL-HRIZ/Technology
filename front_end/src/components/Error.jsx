import React from 'react'
import { Link } from 'react-router-dom'
import error from '../assets/error.png'
const Error = () => {
  return (
    <div className='error-fluid' data-aos="zoom-out-up"   data-aos-duration="3000"
    data-aos-easing="ease-in-out">
        <img src={error} alt="" />
        <Link to='/'><button className='error-btn'>Go Back</button></Link>
      
    </div>
  )
}

export default Error
