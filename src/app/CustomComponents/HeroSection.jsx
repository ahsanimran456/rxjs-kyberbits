import React from 'react';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";
import { TextGenerate } from '../../components/HeroSectionText';
import { PrimaryBtn } from '../../components/PrimaryBtn';
import OrbitingIcons from '../../components/OrbitCircles';

const HeroSection = () => {
  const words = `KyberBits: The World's Strongest Layer 1, Web3 Aggregated Ecosystem That Unites Leading Blockchains Including Bitcoin, Ethereum, Solana & More.`;

  return (
    <section 
      className="relative flex items-center justify-center text-white w-full "
      style={{
        backgroundImage: "url('/background.jpeg')", // Add your background image path here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-60 z-0" 
        style={{
          mixBlendMode: "multiply",
        }}
      ></div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto flex w-full px-6 relative z-10">
        {/* Left Section */}
        <div className="w-[65%] flex flex-col">
          <TextGenerate words={words} />
          <p className="text-gray-100 font-sans mt-6 mb-9 text-md">
            KyberBits is redefining blockchain technology. We aim to build a highly efficient, self-sustaining ecosystem designed to effortlessly manage a large number of transactions.
          </p>
          <div className="flex space-x-6">
            <PrimaryBtn 
              text={'Join Presale'} 
              minwidth={'w-[200px]'} 
              textcenter={true} 
            />
            <button className="px-6 py-3 rounded-full w-[200px] bg-[#202020] hover:bg-gray-800 transition">
              How to buy?
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-6 font-sans">
            Access to 12.85% of the total $BITS supply is available now during our live crypto presale soon. This unique opportunity allows you to participate early and grow with our expanding community.
          </p>
          <Link href={'#'} className="flex items-center gap-2 text-white mt-4">
            <span className="text-sm font-sans">join now</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.7783 15.5355L23.3139 12L19.7783 8.46447L19.7783 15.5355Z" fill="white"></path>
              <path d="M0.686444 12L20.4854 12" stroke="white" strokeWidth="1.2"></path>
            </svg>
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-[35%] flex justify-center items-center">
          <div className="w-full max-w-[600px] h-auto">
            <OrbitingIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
