'use client';
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to update navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    'Wallet',
    'Banks & Institutions',
    'KyberBits Tool',
    'DVPN',
    'SecureChat',
    'Tokenomics',
    'Roadmap',
    'How To Buy',
    'Our Vision',
    'WhitePaper',
  ];

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        // isScrolled ? 'bg-black bg-opacity-90 shadow-md' : ' bg-opacity-50 backdrop-blur-md' 
        ""
      } text-white`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/qubtics.png"
            alt="Qubetics Logo"
            width={100}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Navbar items for large screens */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item}`}
              className="text-[0.9rem] font-sans  relative text-white transition-all duration-300 
                         hover:text-transparent bg-clip-text 
                         hover:bg-gradient-to-r from-green-400 to-purple-600 
                         hover:translate-y-[-2px]"
            >
              {item}
              <span
                className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white 
                           transition-all duration-300 hover:w-full"
              ></span>
            </Link>
          ))}
          {/* Join Presale Button */}
          <Link
            href="#presale"
            className="bg-gradient-to-r from-green-400 to-purple-600 text-white py-2 px-6 rounded-2xl hover:opacity-90 transition-all duration-300"
          >
            Join Presale
          </Link>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white p-4">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="relative text-white transition-all duration-300 
                           hover:text-transparent bg-clip-text 
                           hover:bg-gradient-to-r from-green-400 to-purple-600 
                           hover:translate-y-[-2px]"
              >
                {item}
                <span
                  className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white 
                             transition-all duration-300 hover:w-full"
                ></span>
              </a>
            ))}
            {/* Join Presale Button */}
            <a
              href="#presale"
              className="bg-gradient-to-r from-green-400 to-purple-600 text-white py-2 px-6 rounded-lg text-center"
            >
              Join Presale
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
