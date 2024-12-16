"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function PrimaryBtn({text,minwidth,textcenter}) {
  return (
    (<div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full "
        as="button"
        className={`dark:bg-black text-text dark:text-white flex items-center space-x-2
        ${textcenter && 'justify-center'}
        ${minwidth}`}>
        <span>{text}</span>
      </HoverBorderGradient>
    </div>)
  );
}
