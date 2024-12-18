import Image from "next/image";
import React from "react";

const MobileFrame = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center">
      {/* Mobile Frame without Overflow Hidden */}
      <div className="relative w-[300px] px-2 h-[600px] rounded-[40px] border-[2px] border-gray-700 shadow-2xl bg-black">
        {/* Image Container with Overflow Hidden */}
        <div className="overflow-hidden w-full h-[580px] ">
          <Image
            src={src}
            alt={alt || "Mobile Content"}
            className="object-contain w-full h-full mt-10"
            width={300}
            height={500}
          />
        </div>

        {/* Buttons Wrapper (inside the same container but separate div) */}
        <div className="absolute inset-0 z-10">
          {/* Top Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[30px] bg-gray-900 rounded-b-[20px]"></div>

          {/* Right Side Buttons - Power Button */}
          <div className="absolute top-[180px] -right-[8px] w-[4px] h-[70px] bg-gray-600 rounded-r-lg shadow-md"></div>

          {/* Left Side Buttons - Volume Buttons */}
          <div className="absolute top-[120px] -left-[8px] w-[4px] h-[40px] bg-gray-600 rounded-l-lg shadow-md"></div>
          <div className="absolute top-[180px] -left-[8px] w-[4px] h-[60px] bg-gray-600 rounded-l-lg shadow-md"></div>
          <div className="absolute top-[260px] -left-[8px] w-[4px] h-[40px] bg-gray-600 rounded-l-lg shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
