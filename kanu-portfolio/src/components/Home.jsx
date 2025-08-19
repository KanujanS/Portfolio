import React from 'react'
import PROFILE from '../assets/PROFILE.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaMediumM } from "react-icons/fa";

const Home = () => {
    const [text] = useTypewriter({
        words: ['Full-Stack Developer', 'MERN Enthusiast'],
        loop: {},
        typeSpeed: 130,
        deleteSpeed: 80,
    })
  return (
    <div className='md:flex pt-20 md:pt-30' id='home'>
        <div>
            <p className='font-medium text-lg md:text-xl bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-clip-text text-transparent'>I'm Kanujan Subakaran,</p>
            <p className='text-white font-bold text-5xl md:text-7xl py-5 md:py-8' style={{ textShadow: '0px 0px 90px #0ea5e9' }}>Software <br /> <span className='bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-clip-text text-transparent' >Engineer</span></p>
            <p className='flex items-center'>
                <span className='text-white text-xl md:text-2xl'>{text}</span>
                <span className='text-sky-400 text-3xl animate-pulse ml-1'><Cursor cursorStyle='|'/></span>
            </p>
            <p className='md:text-lg text-gray-400 py-6'>Enthusiastic and dedicated aspiring Software Engineer with a solid understanding of full-stack development.</p>
            <div className='grid grid-cols-2 gap-3 sm:flex sm:space-x-5 sm:gap-0 text-white text-sm space-x-5 py-2'>
                <button className='w-full sm:w-auto border border-gray-500 px-5 py-2 rounded-3xl bg-gray-100/10 hover:bg-gray-500/40 cursor-text'>MongoDB</button>
                <button className='w-full sm:w-auto border border-gray-500 px-5 py-2 rounded-3xl bg-gray-100/10 hover:bg-gray-500/40 cursor-text'>Express.js</button>
                <button className='w-full sm:w-auto border border-gray-500 px-5 py-2 rounded-3xl bg-gray-100/10 hover:bg-gray-500/40 cursor-text'>React.js</button>
                <button className='w-full sm:w-auto border border-gray-500 px-5 py-2 rounded-3xl bg-gray-100/10 hover:bg-gray-500/40 cursor-text'>Node.js</button>
            </div>
            <div className='flex gap-10 py-8 text-white text-sm'>
                <div className='w-45 justify-center gap-2 rounded-xl flex items-center sm:px-7 py-3 bg-black/40 cursor-pointer transition-all duration-300 shadow-[0px_0px_20px_rgba(14,165,233,0.7)] hover:shadow-[0px_0px_30px_rgba(14,165,233,0.9)] hover:bg-sky-400/10 group' onClick={()=> document.getElementById('projects').scrollIntoView({behavior: 'smooth'})} >
                    <p>Projects</p>
                    <BsBoxArrowUpRight className=' transition-transform duration-300 group-hover:rotate-45'/>
                </div>
                <div className='w-45 flex items-center justify-center gap-2 rounded-xl sm:px-7 py-3 bg-black/40 cursor-pointer transition-all duration-300 shadow-[0px_0px_20px_rgba(14,165,233,0.7)] hover:shadow-[0px_0px_30px_rgba(14,165,233,0.9)] hover:bg-sky-400/10 group' onClick={()=> document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
                    <p>Contact</p>
                    <MdMailOutline className='text-lg transition-transform duration-300 group-hover:translate-x-1'/>
                </div>
            </div>
            <div className='flex justify-center sm:justify-start text-2xl py-3 text-gray-100/60 gap-10'>
                <a href="https://www.linkedin.com/in/kanujan-subakaran-156339292/" target='_blank' className='border p-2 rounded-xl shadow-[0px_0px_20px_rgba(14,165,233,0.7)] hover:shadow-[0px_0px_30px_rgba(14,165,233,0.9)]' ><FiGithub /></a>
                <a href="https://github.com/KanujanS" target='_blank' className='border p-2 rounded-xl shadow-[0px_0px_20px_rgba(14,165,233,0.7)] hover:shadow-[0px_0px_30px_rgba(14,165,233,0.9)]' ><FiLinkedin /></a>
                <a href="https://medium.com/@kanujansk" target='_blank' className='border p-2 rounded-xl shadow-[0px_0px_20px_rgba(14,165,233,0.7)] hover:shadow-[0px_0px_30px_rgba(14,165,233,0.9)]' ><FaMediumM /></a>
            </div>
        </div>
        <div className='hidden sm:flex'>
            <img src={PROFILE} alt="Profile Image" className='w-90 md:w-210 ml-20 md:mt-[-25px] '/>
        </div>
    </div>
  )
}

export default Home