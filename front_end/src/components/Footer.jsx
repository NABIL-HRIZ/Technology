import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
<div className='container footer-fluid'>
        <div className="row">
            <div className="col1">
                <h1>Technology </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex atque nulla eligendi voluptatem, nihil corporis, illo illum repellat deserunt debitis qui vero sed vel? Eaque eveniet veniam repudiandae omnis?</p>
            </div>
            <div className="col2">
                <h2>Subscribe to get important update</h2>
                <div className='submit'>
                <input type="email" name="" id="" placeholder='Your email ...' />
                <button type='submit'>Subscribe</button>
                </div>
               
            </div>
            <div className="col3">
                <h2>Fallow Us </h2>
                <div className='icons'>
                <li><a href=""><FaFacebook /></a></li>
                <li><a href=""><FaInstagramSquare /></a></li>
                <li><a href=""><IoLogoWhatsapp /></a></li>

                </div>
            </div>
            <div className="col4">
                <h2>Contact us </h2>
                <h3>+212634354352</h3>
                <h3>Technology@gmail.com</h3>
                <h3>Hay Salama 3 , Casablanca </h3>
            </div>
        </div>
    </div>
    <div className='footer-end'>
        <h3><FaCopyright /> All the rights is reserved@2023</h3>
    </div>
    </div>
    
    
  )
}

export default Footer
