import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false)
  
  return (
    <div className='navbar'>
        <div className='navbar_logo'>
       <h1>INNOVATION_CASA </h1>
        </div>
        <div className={openMenu ? 'navbars_link active' : 'navbar_link' }>
        <ul className='navbar_links '>
            <li className='navbar_link'><Link to={'/'}>Home</Link></li>
            <li className='navbar_link'><Link to={'/about'}>About</Link></li>
            <li className='navbar_link'><Link to={'/services'}>services</Link></li>
            <li className='navbar_link'><Link to={'/contact'}>Contact</Link></li>

        </ul>
        <div className='navbar_mobile'>
          <FaBars className='mobile_nav_icons' onClick={()=>setOpenMenu(true)} />
          <IoCloseSharp className='close_outline mobile_nav_icons' onClick={()=>setOpenMenu(false)}/>
          </div> 
        </div>
       
       
      
    </div>
  )
}

export default Navbar
