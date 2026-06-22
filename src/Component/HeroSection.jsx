import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import Footer from './Footer'
import Pricing from './Pricing'
import Faq from './Faq'
import { Route, Routes } from 'react-router-dom'
import Call from './Call'

const HeroSection = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Pricing' element={<Pricing/>}/>
       <Route path='/Services' element={<Services/>}/>
       <Route path='/Faq' element={<Faq/>}/>
      <Route path='/Call' element={<Call/>}/>
  
      
      </Routes>
        
        
        <Services/>
        
        <Faq/>
        <Footer/>
    </div>
  )
}

export default HeroSection