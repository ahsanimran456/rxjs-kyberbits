import React from 'react';
import mobile from '../../assests/img/powerhouse.svg';

import { TextGenerate } from '@/components/HeroSectionText';
import MobileFrame from '@/components/MobileFrame';
import { PrimaryBtn } from '@/components/PrimaryBtn';
import saxzc from '../../../public/psdfvcx.jpg'
import Image from 'next/image';

const VPN = () => {
    const words = `Decentralized VPN Redefining Internet Privacy and Freedom`

    return (
        <section className="max-w-screen-xl mx-auto flex items-center w-full  text-white mt-24">


            {/* Right Side: Gradient Text & Buttons */}
            <div className="w-[50%] flex flex-col mt-24 p-8 space-y-8">

                {/* <TextGenerate
                    words={words}
                /> */}
                <h1 className='text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
                    Decentralized VPN Redefining Internet Privacy and Freedom
                </h1>
                <p className="text-gray-500 font-sans  text-md">
                    The KyberBits ecosystem introduces a decentralized VPN (dVPN) service designed to enhance security, privacy, and access to an unrestricted internet. Unlike traditional centralized VPN providers that can log, censor, or restrict user data. Operating on a fully decentralized, peer-to-peer network, ensures that no single authority controls user traffic or data. This decentralized model leverages blockchain technology to offer unparalleled transparency, privacy, and resistance to censorship.
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
            {/* Left Side: Gradient Text & Buttons */}
            <div className="w-[50%] flex  " style={{ marginTop: '6rem' }}>
                <div className="w-full max-w-[600px] h-auto">
                <Image
                                src={saxzc}
                                alt={ "Mobile Content"}
                                className="object-contain w-full h-full mt-10"
                                width={300}
                                height={500}
                              />
                </div>
            </div>

        </section>
    );
};
export default VPN;
