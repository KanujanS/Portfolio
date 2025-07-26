import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <p className='font-bold text-2xl bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent cursor-pointer'>KanujanSK</p>
        <div >
            <ul className='flex gap-10 font-medium text-lg'>
                <li className='bg-gradient-to-bl from-sky-400 via-sky-600 to-sky-700 bg-clip-text text-transparent cursor-pointer'>Home</li>
                <li className='bg-gradient-to-bl from-sky-400 via-sky-600 to-sky-700 bg-clip-text text-transparent cursor-pointer'>About</li>
                <li className='bg-gradient-to-bl from-sky-400 via-sky-600 to-sky-700 bg-clip-text text-transparent cursor-pointer'>Projects</li>
                <li className='bg-gradient-to-bl from-sky-400 via-sky-600 to-sky-700 bg-clip-text text-transparent cursor-pointer'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar