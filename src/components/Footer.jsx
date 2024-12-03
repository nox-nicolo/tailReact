// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000300] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quick Links */}
            <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/destinations" className="text-gray-400 hover:text-white">Destinations</a></li>
                <li><a href="/activities" className="text-gray-400 hover:text-white">Activities</a></li>
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white">Terms and Conditions</a></li>
            </ul>
            </div>

            {/* Contact Information */}
            <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400"> Digital Dream, Safari </p>
            <p className="text-gray-400">Email: info@digitalfream.com</p>
            <p className="text-gray-400">Phone: +255 700-123-4567</p>
            </div>
        </div>

        {/* Social Media Links */}
        <div className=" max-w-6xl mx-auto my-10 flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue">
            <FaFacebook size={24} color='blue' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} color= 'red'/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} color='blue'/>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaYoutube size={24} color='red' />
          </a>
        </div>

      {/* Copyright */}
        <div className="max-w-6xl flex flex-col text-white font-bold items-center mx-auto mt-20 md:items-center">
          <p className="text-gray-400 text-sm">© {currentYear} DigitalDream Safari. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
