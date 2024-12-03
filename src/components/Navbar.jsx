// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaHome, FaInfoCircle, FaMapMarkerAlt, FaRegQuestionCircle, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-[100] lg:h-40'>
      {/* Logo */}
      <div className='flex items-center space'>
        <img 
          src={logo} 
          alt="Logo"
          className="h-16 w-auto rounded-lg lg:h-24" 
        />
        <span className="uppercase text-green-500 font-bold  xl:text-xl">Digital Dream Safari</span>
      </div>

      {/* Desktop Links */}
      <div className='hidden lg:flex text-xs sm:text-sm md:text-base font-bold uppercase'>
        <ul className='flex space-x-4'>
          <li className='p-2 hover:text-green-500 transition-colors duration-300'>Home</li>
          <li className='p-2 hover:text-green-500 transition-colors duration-300'>About Us</li>
          <li className='p-2 hover:text-green-500 transition-colors duration-300'>Destinations</li>
          <li className='p-2 hover:text-green-500 transition-colors duration-300'>Travel Info</li>
          <li className='p-2 hover:text-green-500 transition-colors duration-300'>Contact & News</li>
        </ul>
      </div>

      {/* Booking Button */}
      <div className='hidden lg:block'>
        <a 
          href="#booking"
          className="bg-green-500 font-extrabold text-sm text-black px-4 py-2 rounded-xl hover:bg-green-600 transition duration-500"
        >
          Booking Now
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full bg-black bg-opacity-90 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div className='flex items-center p-4'>
          <img 
            src={logo} 
            alt="Logo"
            className="h-16 w-auto rounded-lg" 
          />
          <h1 className='uppercase font-bold text-green-500 xl:text-xl'>Digital Dream Safari</h1>
          
        </div>
        <ul className='uppercase text-lg pt-14'>
          <li className='flex items-center p-4 hover:text-green-500 border-b-2 border-gray-600'>
            <FaHome className="mr-4" />Home
          </li>
          <li className='flex items-center p-4 hover:text-green-500 border-b-2 border-gray-600'>
            <FaInfoCircle className="mr-4" />About Us
          </li>
          <li className='flex items-center p-4 hover:text-green-500 border-b-2 border-gray-600'>
            <FaMapMarkerAlt className="mr-4" />Destinations
          </li>
          <li className='flex items-center p-4 hover:text-green-500 border-b-2 border-gray-600'>
            <FaRegQuestionCircle className="mr-4" />Travel Info
          </li>
          <li className='flex items-center p-4 hover:text-green-500'>
            <FaEnvelope className="mr-4" />Contact & News
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


