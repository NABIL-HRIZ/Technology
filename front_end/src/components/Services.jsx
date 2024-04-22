import React from 'react'
import elements from './OurServicesCard'

const Services = () => {
  return (
    <div className='container service-fluid'>
      <h1>Our Services</h1>
      <div className="row">
        <div className="col">
          {
            elements.map((element)=>(
               <div className='card' key={element.id}>
                <img src={element.image} alt="service" className='card_img' />
                <div className='card_para'>
                  <p>{element.para}</p>
                </div>
                <button style={{color:"purple"}}><span>Read More</span><i></i></button>


               </div>
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Services
