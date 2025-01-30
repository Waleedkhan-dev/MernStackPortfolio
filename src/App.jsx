import { Fragment, useState } from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'

function App() {


  return (
    <Fragment className="bg-gray-950">
      <Navbar />
      <HeroSection />
    </Fragment>
  )
}

export default App
