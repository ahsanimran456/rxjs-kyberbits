"use client";;
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "../../Hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    (<CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}>
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              // remove max-w-4xl if you want the carousel to span the full width of its container
              "max-w-7xl mx-auto"
            )}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}>
            <FaArrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}>
            <FaArrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>)
  );
};

export const Card = ({ card, layout = false }) => {
    const points = [
      "Continue to drive whitelist marketing efforts.",
      "Refine and enhance the whitepaper based on feedback.",
      "Establish a partnership with Blockaid for security assurance.",
      "Set up the Qubetics GitHub environment for collaborative development.",
      "Finalize the scope of the blockchain project.",
      "Complete the design and functionality of the ICO website.",
      "Finalize the design and layout of the whitepaper.",
      "Partner with PhishFort for additional security measures.",
      "Pre-sale initiation.",
      "Participate in Token 2049 Singapore for global exposure.",
      "Form strategic partnerships with financial service providers.",
    ];
  
    return (
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        className="relative h-80 w-56 md:h-[40rem] md:w-96 rounded-3xl overflow-hidden"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
  
        {/* Content Overlay */}
        <div className="absolute bottom-16 left-8 right-8 z-20 text-white">
          <p className="text-sm md:text-base font-medium">Strategic Partnerships and Preparations</p>
          <p className="text-lg md:text-2xl font-bold mt-2">Q3 2024: July - September</p>
          
          {/* Points List */}
          <ul className="mt-4 space-y-1 text-xs md:text-sm">
            {points.map((point, index) => (
              <li key={index} className="list-disc list-inside">
                {point}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Background Image */}
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover"
        />
      </motion.div>
    );
  };
  

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    (<Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest} />)
  );
};
