import React from 'react'
import { BiArrowToTop } from "react-icons/bi";
const ScrollToTopButton = () => {
    const handle=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <div>
        <button onClick={handle} style={{position:'fixed',right:'20px',bottom:'20px',border:'none',backgroundColor:'transparent'}}>
        <BiArrowToTop  style={{fontSize:'30px',backgroundColor:'purple',color:'#fff',outline:'none',borderRadius:'50%',cursor:'pointer'}}/>
        </button>
      
    </div>
  )
}

export default ScrollToTopButton
