import { Fragment, useState } from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import AboutMe from './component/AboutMe'
import Services from './component/Services'
import Projects from './component/Projects'
import MySkills from './component/MySkills'
import WorkExpriance from './component/WorkExpriance'
import Footer from './component/Footer'
import ContactUs from './component/ContactUs'
// import HeroSection from './component/HeroSection'

function App() {


  return (
    <Fragment >
      <div className='bg-gray-950'>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <MySkills />
        <WorkExpriance />
        <Services />
        <Projects />
        <ContactUs />
        <Footer />
      </div>

    </Fragment>
  )
}

export default App
