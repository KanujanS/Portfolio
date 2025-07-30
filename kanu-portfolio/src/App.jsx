import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='px-25 m-5'>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <Navbar/>
        <Home/>
    </div>
  )
}

export default App