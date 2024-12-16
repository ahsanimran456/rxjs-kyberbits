"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import "../../components/components.css";

export const TextGenerateEffect = ({
  words,
  className,  
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "0px 0px -100px 0px" }); 

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1 },
        { duration: duration || 1, delay: stagger(0.2) }
      );
    }
  }, [isInView]); // Trigger only when isInView changes

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="herosection-text">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0" // Start invisible for animation
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-4xl leading-normal font-sans font-bold">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
