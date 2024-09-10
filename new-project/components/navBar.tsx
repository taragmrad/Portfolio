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
    <nav className="bg-[#220b01] p-4 fixed top-0 w-full z-50">
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
        <div className="fixed top-0 left-0 w-full bg-[#220b01] flex flex-col justify-center items-center z-40">
          <button onClick={toggleMenu} className='absolute top-4 right-4'>
            <XMarkIcon className='h-8 w-8 text-white'/>
          </button>
          <ul className="text-center space-y-8">
            <li>
              <a href="#home" onClick={toggleMenu} className="text-white text-4xl hover:underline hover:white">Home</a>
            </li>
            <li>
              <a href="#abt-title" onClick={toggleMenu} className="text-white text-4xl hover:underline hover:white">About</a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu} className="text-white text-4xl hover:underline hover:white">Skills</a>
            </li>
            <li>
              <a href="#ff" onClick={toggleMenu} className="text-white text-4xl hover:underline hover:white">More About Me</a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu} className="text-white text-4xl hover:underline hover:white">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}