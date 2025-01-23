import React from 'react';
import mobile from '../../assests/img/powerhouse.svg';

import { TextGenerate } from '@/components/HeroSectionText';
import MobileFrame from '@/components/MobileFrame';
import { PrimaryBtn } from '@/components/PrimaryBtn';

const Network = () => {
    const words = `The KyberBits Network's initiative for banks and financial institutions is a significant step toward modernizing the global financial landscape.`

    return (
        <section className="max-w-screen-xl mx-auto flex items-center w-full  text-white mt-24">
            {/* Left Side: Gradient Text & Buttons */}
            <div className="w-[50%] flex  " style={{ marginTop: '6rem' }}>
                <div className="w-full max-w-[600px] h-auto">
                    <MobileFrame src={mobile} />
                </div>
            </div>

            {/* Right Side: Gradient Text & Buttons */}
            <div className="w-[50%] flex flex-col mt-24 p-8 space-y-8">

                {/* <TextGenerate
                    words={words}
                /> */}
                 <h1 className='text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
                 The KyberBits Network's initiative for banks and financial institutions is a significant step toward modernizing the global financial landscape.
          </h1>

                <p className="text-gray-500 font-sans  text-md">
                The integration of KUSD tokens with the dollar-backed Tether/Circle (USDT/USDC) introduces stability to the crypto environment, closely mirroring real-world currency values. This strategic connection between KyberBits and KUSD aims to enhance the utility of the BITS token, drawing users to its dependable and promising features.
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
export default Network;
