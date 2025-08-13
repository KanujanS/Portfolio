import React, { useState } from 'react';
import { IoIosCode } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { BsBoxes } from "react-icons/bs";
import Projects from './Projects';
import Certificates from './Certificates';
import TechStacks from './TechStacks';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const renderContent = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'certificates':
        return <Certificates />;
      case 'techStacks':
        return <TechStacks />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className='pt-20 flex flex-col' id='portfolio'>
      <div className='flex flex-col justify-center items-center text-center gap-2'>
        <p className='text-5xl font-bold gradient-text-fallback'>Portfolio Showcase</p>
        <p className='text-md font-light text-gray-400 px-50'>
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <div className='w-full border flex py-2 px-5 mt-10 text-white text-xl font-medium gap-5 rounded-2xl border-gray-400/30 gradient-box-bg'>
        <div 
          className={`w-full flex flex-col py-5 items-center justify-center rounded-xl backdrop-blur-md cursor-pointer 
          ${activeSection === 'projects' ? 'bg-gradient-to-r from-teal-400/10 to-sky-400/10' : 'hover:bg-gradient-to-r hover:from-teal-400/10 hover:to-sky-400/10'}`}
          onClick={() => setActiveSection('projects')}
        >
          <IoIosCode className='text-3xl'/>
          <p>Projects</p>
        </div>

        <div 
          className={`w-full flex flex-col py-5 items-center justify-center rounded-xl backdrop-blur-md cursor-pointer 
          ${activeSection === 'certificates' ? 'bg-gradient-to-r from-teal-400/10 to-sky-400/10' : 'hover:bg-gradient-to-r hover:from-teal-400/10 hover:to-sky-400/10'}`}
          onClick={() => setActiveSection('certificates')}
        >
          <LiaCertificateSolid className='text-3xl'/>
          <p>Certificates</p>
        </div>

        <div 
          className={`w-full flex flex-col py-5 items-center justify-center rounded-xl backdrop-blur-md cursor-pointer 
          ${activeSection === 'techStacks' ? 'bg-gradient-to-r from-teal-400/10 to-sky-400/10' : 'hover:bg-gradient-to-r hover:from-teal-400/10 hover:to-sky-400/10'}`}
          onClick={() => setActiveSection('techStacks')}
        >
          <BsBoxes className='text-3xl'/>
          <p>Tech Stacks</p>
        </div>
      </div>

      <div className='mt-8'>
        {renderContent()}
      </div>
    </div>
  );
};

export default Portfolio;