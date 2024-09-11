'use client'

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1e4556] p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto justify-between items-cente flex">
        <div className="text-white text-2xl font-bold">
          <a href="#home">TGMR</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Bars3Icon  className="h-8 w-8 text-white" />
          </button>
        </div>
        <ul className={`md:flex md:items-center md:gap-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <a href="#home" className="text-white hover:underline ">Home</a>
          </li>
          <li>
            <a href="#abt-title" className="text-white hover:underline">About</a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:underline">Skills</a>
          </li>
          <li>
            <a href="#ff" className="text-white hover:underline">More About Me</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="fixed min-h-[70vh] top-0 left-0 w-full bg-[#1e4556] flex flex-col justify-center items-center z-40">
          <button onClick={toggleMenu} className='absolute top-4 right-4'>
            <XMarkIcon className='h-8 w-8 text-white'/>
          </button>
          <div className="absolute top-4 left-4 text-white text-2xl font-bold">
            <a href="#home">TGMR</a>
          </div>
          <ul className="text-center space-y-8">
            <li>
              <a href="#home" onClick={toggleMenu} className="group relative text-white text-xl">
                Home
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4d6069] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
            <li>
              <a href="#abt-title" onClick={toggleMenu} className="group relative text-white text-xl">
                About
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4d6069] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu} className="group relative text-white text-xl">
                Skills
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4d6069] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
            <li>
              <a href="#ff" onClick={toggleMenu} className="group relative text-white text-xl">
                More About Me
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4d6069] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu} className="group relative text-white text-xl">
                Contact
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4d6069] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}