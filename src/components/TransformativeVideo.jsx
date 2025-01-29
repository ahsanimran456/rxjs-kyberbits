"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { TextGenerate } from "./HeroSectionText";

export function VideoBannerEffect({
    paragrah,
    videolink
}) {
    const words = `Explore the transformative power of KyberBits development methodologies.`;

    return (
        (<div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <div className="w-full flex flex-col items-center justify-center text-center px-8 space-y-5">
                            <div className="max-w-4xl">
                                {/* <TextGenerate words={title} /> */}

                                <h1 className='text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
                                Explore the transformative power of KyberBits development methodologies.
                </h1>
                                
                            </div>
                                <p className="text-gray-500 mb-10 font-sans text-md leading-loose max-w-2xl">
                                     At KyberBits, we simplify blockchain technology with our KyberBits tools. These tools not only ease ICO
          launches but also empower a range of blockchain applications—from smart contract creation to asset
          tokenization, offering limitless innovation possibilities.
                                </p>
                        </div>
                    </>
                }>
                <video
                    src={videolink}
                    className="rounded-lg shadow-lg max-w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            </ContainerScroll>
        </div>)
    );
}
