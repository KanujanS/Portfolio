import React from 'react'
import { TbFileCv } from "react-icons/tb";
import { IoIosArrowDropright } from "react-icons/io";
import { BiExpandHorizontal } from "react-icons/bi";
import { FiArrowDownRight } from "react-icons/fi";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbWorldCode } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import Profile from '../assets/Profile_Img.png'


const About = () => {
  return (
    <div className='text-center pt-30' id='about'>
        <div className='flex flex-col items-center justify-center space-y-3'>
            <p className='text-4xl md:text-5xl font-bold gradient-text-fallback'>About Me</p>
            <div className='flex gap-2'>
                <BsStars className='text-2xl text-sky-500'/>
                <p className='md:text-lg font-medium text-gray-400'>Transforming ideas into digital experiences</p>
                <BsStars className='text-2xl text-sky-500'/>
            </div>
        </div>
        <img src={Profile} alt="Profile Image" className='md:hidden rounded-full mt-10'/>
        <div className='md:flex justify-center md:mt-5 gap-10'>
            <div className='text-white md:text-start md:w-1/2'>
                <p className='gradient-text-heading text-3xl md:text-5xl font-bold mt-15'>Hello I'm,</p>
                <p className='text-3xl md:text-5xl font-bold my-5'>Kanujan Subakaran</p>
                <p className='text-gray-400 md:text-lg text-justify'>Enthusiastic and dedicated aspiring Software Engineer with a solid understanding of full-stack development, particularly in the MERN stack <span className='font-medium text-gray-300'>(MongoDB, Express.js, React.js, Node.js)</span>. Passionate about building responsive web applications and continuously learning to stay updated with the latest software engineering practices.</p>
                <div className='my-6 text-center md:w-50'>
                    <a href="https://drive.google.com/file/d/1m8yu11xsf1ETwkxxshcMv2GUj2szlRQd/view?usp=sharing" target='_blank'>
                    <p className='flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-sky-700 to-sky-800 hover:bg-gradient-to-r hover:from-sky-600 hover:via-sky-900 px-5 py-3 font-medium rounded-xl'><TbFileCv className='text-2xl'/> Download CV</p>
                    </a>
                </div>
            </div>
            <div className='md:w-1/2 text-start text-white md:pl-8'>
                <p className='gradient-text-heading mt-15 text-3xl md:text-5xl font-bold'>Education</p>
                <div className='flex gap-2 my-5 md:text-lg'>
                    <IoIosArrowDropright className='text-2xl md:mt-[2px]'/>
                    <div className='space-y-1 md:space-y-3'>
                        <p>B.Sc (Hons) in Software Engineering</p>
                        <p className='text-gray-400'>Faculty of Computing, Sabaragamuwa University of Sri Lanka</p>
                        <p className='text-gray-400'>Aug 2022 – Present</p>
                    </div>
                </div>
                <div className='flex gap-2 mt-8 md:text-lg'>
                    <IoIosArrowDropright className='text-2xl md:mt-[2px]'/>
                    <div className='space-y-1 md:space-y-3'>
                        <p>G.C.E. Advanced Level ( Physical Science Stream )</p>
                        <p className='text-gray-400'>Kn/Kilinochchi Central College</p>
                        <p className='text-gray-400'>2018 - 2020</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex-col flex md:flex-row gap-7 text-white my-8'>
            <div className='w-full border-[0.1px] border-gray-400/50 p-5 pb-3 bg-sky-800/30 rounded-2xl text-start space-y-4 transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-teal-400/20 hover:via-sky-400/10 hover:to-sky-400/30 cursor-pointer' onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
                <div className='flex justify-between items-center'>
                    <div className='text-4xl border p-3 rounded-full inline-flex items-center justify-center'>
                        <BiExpandHorizontal />
                    </div>
                    <p className='text-4xl font-semibold'>5</p>
                </div>
                <p className='font-medium'>TOTAL PROJECTS</p>
                <div className='flex justify-between items-center'>
                    <p className='text-xs'>Innovative web solutions crafted</p>
                    <FiArrowDownRight className='text-2xl'/>
                </div>
            </div>
            <div className='w-full border-[0.1px] border-gray-400/50 p-5 pb-3 bg-sky-800/30 rounded-2xl text-start space-y-4 transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-tr hover:from-teal-400/20 hover:via-sky-400/10 hover:to-sky-400/30 cursor-pointer' onClick={()=> document.getElementById('portfolio').scrollIntoView({behavior:'smooth'})}>
                <div className='flex justify-between items-center'>
                    <div className='text-4xl border p-3 rounded-full inline-flex items-center justify-center'>
                        <LiaCertificateSolid />
                    </div>
                    <p className='text-4xl font-semibold'>3</p>
                </div>
                <p className='font-medium'>CERTIFICATES</p>
                <div className='flex justify-between'>
                    <p className='text-xs'>Professional skills validated</p>
                    <FiArrowDownRight className='text-2xl'/>
                </div>
            </div>
            <div className='w-full border-[0.1px] border-gray-400/50 p-5 pb-3 bg-sky-800/30 rounded-2xl text-start space-y-4 transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-bl hover:from-teal-400/20 hover:via-sky-400/10 hover:to-sky-400/30 cursor-pointer' onClick={()=> document.getElementById('portfolio').scrollIntoView({behavior:'smooth'})}>
                <div className='flex justify-between'>
                    <div className='text-4xl border p-3 rounded-full inline-flex items-center justify-center'>
                        <TbWorldCode />
                    </div>
                    <p className='text-4xl font-semibold'>1</p>
                </div>
                <p className='font-medium'>YEARS OF EXPERIENCE</p>
                <div className='flex justify-between'>
                    <p className='text-xs'>Continuous learning journey</p>
                    <FiArrowDownRight className='text-2xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About