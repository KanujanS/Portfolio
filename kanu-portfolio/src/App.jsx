import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='px-25 m-5'>
      <div className="bg-grid-full"></div>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Projects/>
    </div>
  )
}

export default App