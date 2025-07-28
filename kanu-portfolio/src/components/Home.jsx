import React from 'react'
import PROFILE from '../assets/PROFILE.png'

const Home = () => {
  return (
    <div className='flex mt-20'>
        <div>
            <p className='font-medium text-xl bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-clip-text text-transparent'>I'm Kanujan Subakaran,</p>
            <p className='text-white font-bold text-7xl py-8 text-shadow-xl'>Software <br /> <span className='bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-clip-text text-transparent'>Engineer</span></p>
            <p className='text-white text-2xl'>Full-Stack Developer</p>
            <p className='text-lg text-gray-200 py-5'>Enthusiastic and dedicated aspiring Software Engineer with a solid understanding of full-stack development.</p>
            <div className='text-white space-x-5'>
                <button className='border px-5 py-2 rounded-3xl bg-gray-100/10'>MongoDB</button>
                <button className='border px-5 py-2 rounded-3xl bg-gray-100/10'>Express.js</button>
                <button className='border px-5 py-2 rounded-3xl bg-gray-100/10'>React.js</button>
                <button className='border px-5 py-2 rounded-3xl bg-gray-100/10'>Node.js</button>
            </div>
            <div className='flex gap-10 py-8 text-white'>
                <p className='border border-none px-10 py-3 rounded-xl bg-black/50'>Projects</p>
                <p className='border border-none px-10 py-3 rounded-xl bg-black/50'>Contact Me</p>
            </div>
            <div>

            </div>
        </div>
        <div>
            <img src={PROFILE} alt="Profile Image" className='w-210'/>
        </div>
    </div>
  )
}

export default Home