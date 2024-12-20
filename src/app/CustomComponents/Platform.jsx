import React from 'react';
import mobile from '../../assests/img/powerhouse.svg';

import { TextGenerate } from '@/components/HeroSectionText';
import MobileFrame from '@/components/MobileFrame';
import { PrimaryBtn } from '@/components/PrimaryBtn';

const Platform = () => {
    const words = `Transforming Asset Acquisition with the KyberBits Platform`

    return (
        <section className="max-w-screen-xl mx-auto flex items-center w-full  text-white mt-24">


            {/* Right Side: Gradient Text & Buttons */}
            <div className="w-[50%] flex flex-col mt-24 p-8 space-y-8">

                <TextGenerate
                    words={words}
                />

                <p className="text-gray-500 font-sans  text-md">
                    Meet the KyberBits multi-chain crypto Wallet—a non-custodial, open-source powerhouse. Enjoy feeless $BITS transfers in-app, debit & virtual cards, seamless Apple Pay and Google Pay integration, a decentralized VPN (dVPN) service, and access to a tokenized asset marketplace, all conveniently housed in one application.
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
                    <MobileFrame src={mobile} />
                </div>
            </div>

        </section>
    );
};
export default Platform;
