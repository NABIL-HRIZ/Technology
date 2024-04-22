import React from 'react'
import store from '../assets/store.jpg'
const Contact = () => {
  return (
    <div className='container contact_fluid'>
      <h1>Contact Us</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212753.6744039322!2d-7.75180667252683!3d33.57217828146373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1707999830395!5m2!1sfr!2sma" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       <div className='contact-forms'>
        <div className='contact_img'>
          <img src={store} alt="" />
        </div>
        <form action="https://formspree.io/f/mnqedveb" method='post' className='contact-form'>
        <input type="text" name='username' placeholder='Username...' autoComplete='off' required />
        <input type="email" name="email" placeholder='Email...' autoComplete='off' required />
        <textarea name="message"  cols="30" rows="6"></textarea>
        <input type="submit" value="send" className='submit'/>
        </form>

       </div>
      
    </div>
  )
}

export default Contact
