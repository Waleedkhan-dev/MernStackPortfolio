import { Fragment, useState } from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import AboutMe from './component/AboutMe'
import Services from './component/Services'
import Projects from './component/Projects'
// import HeroSection from './component/HeroSection'

function App() {


  return (
    <Fragment className="bg-gray-950">
      <div className='bg-gray-950'>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <Services />
        <Projects />
      </div>

    </Fragment>
  )
}

export default App
