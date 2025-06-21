import React from 'react'
import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import Hero from '../src/components/Hero/Hero'
import Partners from '../src/components/Partners/Partners'
import TopCourses from '../src/components/TopCourses/TopCourses'
import Mission from '../src/components/Mission/Mission'
import Testimonials from '../src/components/Testimonials/Testimonials'
import CallToAction from './components/CallToAction/CallToAction';
import FAQ from './components/FAQ/FAQ';
import Footer from '../src/components/Footer/Footer'

export default function App() {
  return (
    <div>
      <>
      <Navbar/>
      <Hero/>
      <Partners/>
      <TopCourses/>
      <Mission/>
      <Testimonials/>
      <CallToAction/>
      <FAQ/>
      <Footer/>
      </>
    </div>
  )
}
