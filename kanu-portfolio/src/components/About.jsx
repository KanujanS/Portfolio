import React from 'react'

const About = () => {
  return (
    <div className='mt-30 text-center' id='about'>
        <p className='text-5xl font-bold gradient-text-fallback'>About Me</p>
        <div className='flex justify-center gap-10'>
            <div className='text-white text-start w-1/2'>
                <p className='gradient-text-heading text-5xl font-bold mt-15'>Hello I'm,</p>
                <p className='text-5xl font-bold my-5'>Kanujan Subakaran</p>
                <p className='text-gray-400 text-lg'>Enthusiastic and dedicated aspiring Software Engineer with a solid understanding of full-stack development, particularly in the MERN stack <span className='font-medium text-gray-300'>(MongoDB, Express.js, React, Node.js)</span>. Passionate about building responsive web applications and continuously learning to stay updated with the latest software engineering practices.</p>
                <div className='my-3'>
                    <p className='border '>Download CV</p>
                </div>
            </div>
            <div className='w-1/2 text-white'>
                <p>Education</p>
            </div>
        </div>
    </div>
  )
}

export default About