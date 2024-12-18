import React from 'react';
import mobile from '../../assests/img/powerhouse.svg';

import { TextGenerate } from '@/components/HeroSectionText';
import MobileFrame from '@/components/MobileFrame';
import { PrimaryBtn } from '@/components/PrimaryBtn';
import Image from 'next/image';
import src from '../../assests/img/vipcards.png';

const Streamline = () => {
    const words = `Unleash your creativity and streamline your event management with KyberBits’ innovative platform features`

    return (
        <section className="max-w-screen-xl mx-auto flex items-center w-full text-white mt-4">
            {/* Left Side: Gradient Text & Buttons */}
            <div className="w-[50%] flex p-8  " >
                <div className="w-full max-w-[600px] h-auto">
                    <Image
                        src={src}
                        alt="Vip KyberBits"
                        className="object-cover rounded-lg"
                        width={600} // Provide actual image width
                        height={400} // Provide actual image height
                        quality={100} // Increase quality to avoid pixelation
                        priority // For preloading important images
                    />
                </div>
            </div>

            {/* Right Side: Gradient Text & Buttons */}
            <div className="w-[50%] flex flex-col  p-8 space-y-8">

                <TextGenerate
                    words={words}
                />

                <p className="text-gray-500 font-sans  text-md">
                    Imagine effortlessly generating NFT QR codes for music events, enabling secure ticketing, exclusive access, and unique fan experiences, all with a few clicks. Using our planned intuitive platform, anyone can design and deploy these NFTs without prior coding knowledge, thanks to AI-guided prompts and drag-and-drop functionalities. Beyond music events, the possibilities are limitless; from personalized event memorabilia to loyalty rewards and beyond, KyberBits will empower you to transform any idea into a blockchain reality, making advanced technology accessible to all.
                </p>


                <div className="flex space-x-6">

                    <PrimaryBtn text={'Join Presale'}
                        minwidth={'w-[200px]'}
                        textcenter={true}
                    />
                    <button className="px-6 py-3 rounded-full  w-[200px] bg-[#202020]  hover:bg-gray-800 transition">
                        How to buy?
                    </button>
                </div>

            </div>


        </section>
    );
};
export default Streamline;
