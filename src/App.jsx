import { Fragment, useState } from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import AboutMe from './component/AboutMe'
import Services from './component/Services'
import Projects from './component/Projects'
import MySkills from './component/MySkills'
import WorkExpriance from './component/WorkExpriance'
import Footer from './component/Footer'
// import HeroSection from './component/HeroSection'

function App() {


  return (
    <Fragment className="bg-gray-950">
      <div className='bg-gray-950'>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <MySkills />
        <WorkExpriance />
        <Services />
        <Projects />
        <Footer />
      </div>

    </Fragment>
  )
}

export default App
