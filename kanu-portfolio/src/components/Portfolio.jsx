import React from 'react'
import { IoIosCode } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { BsBoxes } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div className='py-20 flex flex-col' id='portfolio'>
        <div className='flex flex-col justify-center items-center text-center gap-2'>
            <p className='text-5xl font-bold gradient-text-fallback'>Portfolio Showcase</p>
            <p className='text-md font-light text-gray-400 px-50'>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
        </div>
        <div className='w-full border flex py-2 px-5 mt-10 text-white text-xl font-medium gap-5 rounded-2xl border-gray-400/30'>
            <div className='w-full border border-gray-400/30 flex flex-col py-5 items-center justify-center rounded-xl bg-sky-400/20'>
                <IoIosCode className='text-3xl'/>
                <p>Projects</p>
            </div>
            <div className='w-full border border-gray-400/30 flex flex-col py-5 items-center justify-center rounded-xl bg-sky-400/20'>
               <LiaCertificateSolid className='text-3xl'/>
                <p>Certificates</p>
            </div>
            <div className='w-full border border-gray-400/30 flex flex-col py-5 items-center justify-center rounded-xl bg-sky-400/20'>
                <BsBoxes />
                <p>Tech Stacks</p>
            </div>
        </div>
    </div>
  )
}

export default Portfolio