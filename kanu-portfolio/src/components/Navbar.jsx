import React from 'react'
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl  px-30 py-5'>
      <div className='flex justify-between items-center'>
        <p className='font-bold text-2xl bg-gradient-to-r from-sky-400 via-sky-600 to-sky-700 bg-clip-text text-transparent cursor-pointer'>KanujanSK</p>
        <div >
            <ul className='flex gap-10 text-white font-medium text-md'>
                <li className=' cursor-pointer'>
                  <Link to='home' smooth={true} duration={500} spy={true} activeClass="active-link">Home</Link>
                  <hr className='mt-1 border-none h-[1.5px] bg-white justify-center link-hr'/>
                </li>
                <li className=' cursor-pointer'>
                  <Link to='about' smooth={true} duration={500} spy={true} activeClass="active-link">About</Link>
                  <hr className='mt-1 border-none h-[1.5px] bg-white justify-center link-hr'/>
                </li>
                <li className=' cursor-pointer'>
                  <Link to='projects' smooth={true} duration={500} spy={true} activeClass="active-link">Projects</Link>
                  <hr className='mt-1 border-none h-[1.5px] bg-white justify-center link-hr'/>
                </li>
                <li className='cursor-pointer'>
                  <Link to='contact' smooth={true} duration={500} spy={true} activeClass="active-link">Contact</Link>
                  <hr className='mt-1 border-none h-[1.5px] bg-white justify-center link-hr'/>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar