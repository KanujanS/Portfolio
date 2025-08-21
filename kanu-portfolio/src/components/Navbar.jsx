import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import { HiMenu, HiX } from "react-icons/hi";


const Navbar = () => {
  const [scrolled,setScrolled] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = ()=> {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  
  return (
    <div className={`fixed top-0 left-0 w-full z-50 px-7 py-5 md:px-30 ${menuOpen ? 'bg-black/80 backdrop-blur-3xl' : scrolled ? 'bg-sky-950/20 backdrop-blur-xl shadow-md' : 'bg-transparent'} `}>
      <div className='flex justify-between items-center'>
        <Link to='home' smooth={true} duration={500}>
           <p className='font-bold text-2xl bg-gradient-to-r from-sky-400 via-sky-600 to-sky-700 bg-clip-text text-transparent cursor-pointer'>KanujanSK</p>
        </Link>
        <div >
            <ul className='hidden md:flex gap-10 text-white font-medium text-md'>
                <li className=' cursor-pointer'>
                  <Link to='home' smooth={true} duration={500} spy={true} activeClass="active-link">Home</Link>
                  <hr className='mt-1 border-none h-[1.5px] bg-white justify-center link-hr'/>
                </li>
                <li className=' cursor-pointer'>
                  <Link to='about' smooth={true} duration={500} spy={true} activeClass="active-link">About</Link>
                  <hr className='mt-1 border-none h-[1.5px] bg-white justify-center link-hr'/>
                </li>
                <li className=' cursor-pointer'>
                  <Link to='portfolio' smooth={true} duration={500} spy={true} activeClass="active-link">Portfolio</Link>
                  <hr className='mt-1 border-none h-[1.5px] bg-white justify-center link-hr'/>
                </li>
                <li className='cursor-pointer'>
                  <Link to='contact' smooth={true} duration={500} spy={true} activeClass="active-link">Contact</Link>
                  <hr className='mt-1 border-none h-[1.5px] bg-white justify-center link-hr'/>
                </li>
            </ul>
            <button onClick={()=> setMenuOpen(!menuOpen)} className='md:hidden text-white text-3xl'>{menuOpen ? <HiX/> : <HiMenu/>}</button>
        </div>
      </div>
      {menuOpen && (
          <div className='md:hidden mt-5 p-5 space-y-5 text-white font-medium text-lg'>
            {['home', 'about', 'portfolio', 'contact'].map((section)=>(
              <Link key={section} to={section} smooth={true} duration={500} spy={true} activeClass='active-link' onClick={()=>setMenuOpen(false)} className='block cursor-pointer'>
                {section.charAt(0).toUpperCase()+section.slice(1)}
              </Link>
            ))}
          </div>
        )}
    </div>
  )
}

export default Navbar