"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { TextGenerate } from "./HeroSectionText";

export function VideoBannerEffect({
    title,
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
                                <TextGenerate words={title} />
                            </div>
                            {paragrah &&
                                <p className="text-gray-500 mb-10 font-sans text-md leading-loose max-w-2xl">
                                    {paragrah}
                                </p>
                            }
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
