
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Error from './components/Error'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ScrollToTopButton from './components/ScrollToTopButton'


const App = () => {
  
  return (
   
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route  path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>} />
    <Route  path='/contact' element={<Contact/>}/>
   <Route path='*' element={<Error />} />
   </Routes>
   <ScrollToTopButton />
   <Footer/>
   </BrowserRouter>
   

   
   </>
  )
}

export default App
