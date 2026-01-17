import { useState } from 'react'
import './App.css'
import Navigation from './Customer/Component/Navigation/Navigation'
import Homepages from './Customer/Pages/HomePages/Homepages'
import Footer from './Customer/Component/Navigation/Footer'

function App() {

  return (
    <>
      <div className='overflow-hidden'>
        <Navigation/>
        <Homepages/>
        <Footer/>
      </div>
    </>
  )
}

export default App
