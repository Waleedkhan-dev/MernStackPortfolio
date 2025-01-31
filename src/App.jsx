import { Fragment, useState } from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
// import HeroSection from './component/HeroSection'

function App() {


  return (
    <Fragment className="bg-gray-950">
      <div className='bg-gray-950'>
        <Navbar />
        <HeroSection />
      </div>

    </Fragment>
  )
}

export default App
