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
    <div className='min-h-screen flex mt-30' id='home'>
        <div>
            <p className='font-medium text-xl bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-clip-text text-transparent'>I'm Kanujan Subakaran,</p>
            <p className='text-white font-bold text-7xl py-8' style={{ textShadow: '0px 0px 90px #0ea5e9' }}>Software <br /> <span className='bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-clip-text text-transparent' >Engineer</span></p>
            <p className='flex items-center'>
                <span className='text-white text-2xl'>{text}</span>
                <span className='text-sky-400 text-3xl animate-pulse ml-1'><Cursor cursorStyle='|'/></span>
            </p>
            <p className='text-lg text-gray-400 py-6'>Enthusiastic and dedicated aspiring Software Engineer with a solid understanding of full-stack development.</p>
            <div className='text-white text-sm space-x-5 py-2'>
                <button className='border border-gray-500 px-5 py-2 rounded-3xl bg-gray-100/10'>MongoDB</button>
                <button className='border border-gray-500 px-5 py-2 rounded-3xl bg-gray-100/10'>Express.js</button>
                <button className='border border-gray-500 px-5 py-2 rounded-3xl bg-gray-100/10'>React.js</button>
                <button className='border border-gray-500 px-5 py-2 rounded-3xl bg-gray-100/10'>Node.js</button>
            </div>
            <div className='flex gap-10 py-8 text-white text-sm'>
                <div className='w-45 justify-center gap-2 rounded-xl flex items-center px-7 py-3 bg-black/40' style={{ boxShadow: '0px 0px 20px rgba(14, 165, 233, 0.7)' }}>
                    <p>Projects</p>
                    <BsBoxArrowUpRight />
                </div>
                <div className='w-45 flex items-center justify-center gap-2 rounded-xl px-7 py-3 bg-black/40' style={{ boxShadow: '0px 0px 20px rgba(14, 165, 233, 0.7)' }}>
                    <p>Contact Me</p>
                    <MdMailOutline className='text-lg'/>
                </div>
            </div>
            <div className='flex text-2xl py-3 text-gray-100/60 gap-10'>
                <a href="https://www.linkedin.com/in/kanujan-subakaran-156339292/" target='_blank' className='border p-2 rounded-xl' style={{ boxShadow: '0px 0px 20px rgba(14, 165, 233, 0.7)' }}><FiGithub /></a>
                <a href="https://github.com/KanujanS" target='_blank' className='border p-2 rounded-xl' style={{ boxShadow: '0px 0px 20px rgba(14, 165, 233, 0.7)' }}><FiLinkedin /></a>
                <a href="https://medium.com/@kanujansk" target='_blank' className='border p-2 rounded-xl' style={{ boxShadow: '0px 0px 20px rgba(14, 165, 233, 0.7)' }}><FaMediumM /></a>
            </div>
        </div>
        <div>
            <img src={PROFILE} alt="Profile Image" className='w-210 ml-20 mt-[-25px]'/>
        </div>
    </div>
  )
}

export default Home