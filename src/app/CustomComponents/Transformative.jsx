import React from 'react';
import { TextGenerate } from '@/components/HeroSectionText';

const Transforamtive = () => {
  const words = `Explore the transformative power of KyberBits development methodologies.`;

  return (
    <section className="max-w-screen-xl mx-auto flex items-center justify-center w-full  text-white">
      <div className="w-full flex flex-col items-center justify-center text-center p-8 space-y-5">
        <div className="max-w-4xl">
          <TextGenerate words={words} />
        </div>

        <p className="text-gray-500 font-sans text-md leading-loose max-w-2xl">
          At KyberBits, we simplify blockchain technology with our KyberBits tools. These tools not only ease ICO
          launches but also empower a range of blockchain applications—from smart contract creation to asset
          tokenization, offering limitless innovation possibilities.
        </p>

        {/* Video Section */}
        <div className="w-full flex justify-center">
          <video
            src="/mint-token.mp4"
            className="rounded-lg shadow-lg max-w-full"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Transforamtive;
