// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="container mx-auto text-right pr-5">
        <div className="py-4">
          <p>&copy; 2024 Fremont School of Coding.</p>
          <ul className="flex justify-end space-x-4 mt-2">
            {/* <li><Link to="/about">About Us</Link></li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;