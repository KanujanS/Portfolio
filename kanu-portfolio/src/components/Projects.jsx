import React from 'react'
import FoodDelivery from '../assets/Food.png'
import MNS from '../assets/MNS.png'
import LMS from '../assets/LMS.png'
import Ecommerce from '../assets/Ecommerce.png'
import Univesity from '../assets/University.png'
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const Projects = () => {
  return (
    <div className='grid grid-cols-2 gap-5 px-5' id='projects'>
            <div className='border-2 p-6 bg-gradient-to-b from-sky-950/50 to-teal-800/50 border-gray-400/30 rounded-2xl hover:border-2 hover:border-sky-400/40 group'>
                <div className='overflow-hidden relative rounded-xl'>
                   <img src={FoodDelivery} alt="Food Delivery website image" className='rounded-lg transform transition-transform duration-300 group-hover:scale-105'/>
                </div>
                <p className='text-2xl text-gray-200 py-3 font-medium'>Royal Food</p>
                <p className='text-justify text-gray-300'>A responsive food delivery web app built with the MERN stack. Integrated Stripe for secure payments and developed an admin panel to manage menu items, track orders, and update order statuses in real-time.</p>
                <div className='flex justify-between text-white pt-5'> 
                    <div className='flex items-center gap-2 cursor-pointer text-sky-500 hover:text-sky-300 font-medium'>
                        <button className='cursor-pointer'>Live Demo</button>
                        <HiArrowTopRightOnSquare className='text-xl'/>
                    </div>
                    <div className='border border-sky-950 bg-gray-400/20 hover:bg-gray-200/20 px-5 py-2 rounded-xl cursor-pointer'>
                        <button><a href="https://github.com/KanujanS/Royal_Food.git" target='_blank' className='flex gap-2'>Github<FaGithub className='text-xl'/></a></button>
                    </div>
                </div>
            </div>
            <div className='border-2 p-6 bg-gradient-to-b from-sky-950/50 to-teal-800/50 border-gray-400/30 rounded-2xl hover:border-2 hover:border-sky-400/40 group'>
                <div className='overflow-hidden relative rounded-xl'>
                    <img src={MNS} alt="School management system website image" className='w-150 rounded-lg transform transition-transform duration-300 group-hover:scale-105'/>
                </div>
                <p className='text-2xl text-gray-200 py-3 font-medium'>MNS</p>
                <p className='text-justify text-gray-300'>A School Management System Developed for Mahiyangana National School using the MERN stack, JWT authentication, and Tailwind CSS. Features role based dashboards for Admins, Staff, and Students. Students can access their academic records.</p>
                <div className='flex justify-between text-white pt-5'> 
                    <div className='flex items-center gap-2 cursor-pointer text-sky-500 hover:text-sky-300 font-medium'>
                        <button className='cursor-pointer'>Live Demo</button>
                        <HiArrowTopRightOnSquare className='text-xl'/>
                    </div>
                    <div className='border border-sky-950 bg-gray-400/20 hover:bg-gray-200/20 px-5 py-2 rounded-xl cursor-pointer'>
                        <button><a href="https://github.com/KanujanS/School-Management-System.git" target='_blank' className='flex gap-2 font-medium'>Github<FaGithub className='text-xl'/></a></button>
                    </div>
                </div>
            </div>
            <div className='border-2 p-6 bg-gradient-to-b from-sky-950/50 to-teal-800/50 border-gray-400/30 rounded-2xl hover:border-2 hover:border-sky-400/40 group'>
                <div className='overflow-hidden relative rounded-xl'>
                    <img src={LMS} alt="Learning Management system website image" className='w-150 rounded-lg transform transition-transform duration-300 group-hover:scale-105'/>
                </div>
                <p className='text-2xl text-gray-200 py-3 font-medium'>Learn Gate</p>
                <p className='text-justify text-gray-300'>An online course platform built with the MERN stack, Tailwind CSS, and Stripe for secure payments. Users can enroll in courses or register as educators. Includes dashboards for educators to manage courses and track earnings.</p>
                <div className='flex justify-between text-white pt-5'> 
                    <div className='flex items-center gap-2 cursor-pointer text-sky-500 hover:text-sky-300 font-medium'>
                        <button className='cursor-pointer'>Live Demo</button>
                        <HiArrowTopRightOnSquare className='text-xl'/>
                    </div>
                    <div className='border border-sky-950 bg-gray-400/20 hover:bg-gray-200/20 px-5 py-2 rounded-xl cursor-pointer'>
                        <button><a href="https://github.com/KanujanS/LMS.git" target='_blank' className='flex gap-2'>Github<FaGithub className='text-xl'/></a></button>
                    </div>
                </div>
            </div>
            <div className='border-2 p-6 bg-gradient-to-b from-sky-950/50 to-teal-800/50 border-gray-400/30 rounded-2xl hover:border-2 hover:border-sky-400/40 group'>
                <div className='overflow-hidden relative rounded-xl'>
                   <img src={Ecommerce} alt="Ecommerce website image" className='w-150 rounded-lg transform transition-transform duration-300 group-hover:scale-105'/>
                </div>
                <p className='text-2xl text-gray-200 py-3 font-medium'>MaxBuy</p>
                <p className='text-justify text-gray-300'>A full stack e-commerce web app built with the MERN stack, Tailwind CSS, and PayPal API. Features include product browsing, filtering, variant selection, cart management, and order placement. Supports Cash on Delivery and PayPal payments.</p>
                <div className='flex justify-between text-white pt-5'> 
                    <div className='flex items-center gap-2 cursor-pointer text-sky-500 hover:text-sky-300 font-medium'>
                        <button className='cursor-pointer'>Live Demo</button>
                        <HiArrowTopRightOnSquare className='text-xl'/>
                    </div>
                    <div className='border border-sky-950 bg-gray-400/20 hover:bg-gray-200/20 px-5 py-2 rounded-xl cursor-pointer'>
                        <button><a href="https://github.com/KanujanS/E-Commerce-Website.git" target='_blank' className='flex gap-2 font-medium'>Github<FaGithub className='text-xl'/></a></button>
                    </div>
                </div>
            </div>
            <div className='border-2 p-6 bg-gradient-to-b from-sky-950/50 to-teal-800/50 border-gray-400/30 rounded-2xl hover:border-2 hover:border-sky-400/40 group'>
                <div className='overflow-hidden relative rounded-xl'>
                    <img src={Univesity} alt="University website image" className='w-150 rounded-lg transform transition-transform duration-300 group-hover:scale-105'/>
                </div>
                <p className='text-2xl text-gray-200 py-3 font-medium'>University</p>
                <p className='text-justify text-gray-300'>An online course platform built with the MERN stack, Tailwind CSS, and Stripe for secure payments. Users can enroll in courses or register as educators. Includes dashboards for educators to manage courses and track earnings.</p>
                <div className='flex justify-between text-white pt-5'> 
                    <div className='flex items-center gap-2 cursor-pointer text-sky-500 hover:text-sky-300 font-medium'>
                        <button className='cursor-pointer'><a href="https://educity-vvvb.vercel.app/" target='_blank'>Live Demo</a></button>
                        <HiArrowTopRightOnSquare className='text-xl'/>
                    </div>
                    <div className='border border-sky-950 bg-gray-400/20 hover:bg-gray-200/20 px-5 py-2 rounded-xl cursor-pointer'>
                        <button><a href="https://github.com/KanujanS/Educity.git" target='_blank' className='flex gap-2'>Github<FaGithub className='text-xl'/></a></button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Projects