import React from 'react'
import { TbFileCv } from "react-icons/tb";
import { IoIosArrowDropright } from "react-icons/io";
import { BiExpandHorizontal } from "react-icons/bi";
import { FiArrowDownRight } from "react-icons/fi";


const About = () => {
  return (
    <div className='mt-30 text-center' id='about'>
        <p className='text-5xl font-bold gradient-text-fallback'>About Me</p>
        <div className='flex justify-center gap-10'>
            <div className='text-white text-start w-1/2'>
                <p className='gradient-text-heading text-5xl font-bold mt-15'>Hello I'm,</p>
                <p className='text-5xl font-bold my-5'>Kanujan Subakaran</p>
                <p className='text-gray-400 text-lg text-justify'>Enthusiastic and dedicated aspiring Software Engineer with a solid understanding of full-stack development, particularly in the MERN stack <span className='font-medium text-gray-300'>(MongoDB, Express.js, React, Node.js)</span>. Passionate about building responsive web applications and continuously learning to stay updated with the latest software engineering practices.</p>
                <div className='my-6 text-center'>
                    <a href="https://drive.google.com/file/d/1LYqnEw0iqlBnbpZ4jvX7YNjOF28nlDmW/view?usp=drive_link" target='_blank'>
                    <p className='flex items-center w-50 gap-2 border bg-gradient-to-r from-sky-500 via-sky-700 to-blue-950 hover:bg-gradient-to-r hover:from-sky-600 hover:via-sky-800 px-5 py-2 font-medium rounded-xl'><TbFileCv className='text-2xl'/> Download CV</p>
                    </a>
                </div>
            </div>
            <div className='w-1/2 text-white pl-8'>
                <p className='gradient-text-heading mt-15 text-5xl font-semibold'>Education</p>
                <div className='flex gap-2 text-start my-5 text-lg'>
                    <IoIosArrowDropright className='text-2xl mt-[2px]'/>
                    <div className='space-y-3'>
                        <p>B.Sc (Hons) in Software Engineering</p>
                        <p className='text-gray-400'>Aug 2022 – Present</p>
                        <p className='text-gray-400'>Faculty of Computing, Sabaragamuwa University of Sri Lanka</p>
                    </div>
                </div>
                <div className='flex gap-2 text-start mt-8 text-lg'>
                    <IoIosArrowDropright className='text-2xl mt-[2px]'/>
                    <div className='space-y-3'>
                        <p>G.C.E. Advanced Level ( Physical Science Stream )</p>
                        <p className='text-gray-400'>2018 - 2020</p>
                        <p className='text-gray-400'>Kn/Kilinochchi Central College</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-row gap-7 text-white my-8'>
            <div className='w-full h-50 border p-5 bg-sky-800/30 rounded-2xl text-start space-y-4'>
                <div className='flex justify-between items-center'>
                    <BiExpandHorizontal className='text-2xl border p-5 rounded-full inline-flex items-center justify-center overflow-visible'/>
                    <p className='text-4xl font-medium'>5</p>
                </div>
                <p>TOTAL PROJECTS</p>
                <div className='flex justify-between items-center'>
                    <p className='text-xs'>Innovative web solutions crafted</p>
                    <FiArrowDownRight />
                </div>
            </div>
            <div className='w-full h-50 border p-5 bg-sky-800/30 rounded-2xl text-start space-y-4'>
                <div className='flex justify-between items-center'>
                    <BiExpandHorizontal className='text-4xl border p-2 rounded-full'/>
                    <p className='text-4xl font-medium'>3</p>
                </div>
                <p>CERTIFICATES</p>
                <div className='flex justify-between'>
                    <p className='text-xs'>Professional skills validated</p>
                    <FiArrowDownRight />
                </div>
            </div>
            <div className='w-full h-50 border p-5 bg-sky-800/30 rounded-2xl text-start space-y-4'>
                <div className='flex justify-between'>
                    <BiExpandHorizontal className='text-4xl border p-2 rounded-full'/>
                    <p className='text-4xl font-medium'>1</p>
                </div>
                <p>YEARS OF EXPERIENCE</p>
                <div className='flex justify-between'>
                    <p className='text-xs'>Continuous learning journey</p>
                    <FiArrowDownRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About