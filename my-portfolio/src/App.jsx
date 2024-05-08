import React from 'react'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Skills from './components/Skills'
import './App.css'

function App() {
  return (
    <>
    <div className='w-[1100px] mx-auto'>
      <Intro/>
      <Skills/>
      <Footer/>
    </div>
    </>
  )
}

export default App
