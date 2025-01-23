import React from 'react';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";
// import SparklesPreview from '../../components/HeroSectionText';
import { TextGenerate } from '../../components/HeroSectionText';
import { PrimaryBtn } from '../../components/PrimaryBtn';
import OrbitingNewera from '@/components/NewEraOrbit';

const NewEra = () => {
    const words = `Shaping a New Era of Financial Interaction with KUSD`

    return (
        <section className="max-w-screen-xl mx-auto flex w-full mt-32 px-6  text-white">
            <div className="w-[40%] flex flex-col">
                {/* <TextGenerate
                    words={words}
                /> */}
                 <h1 className='text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
                 Shaping a New Era of Financial Interaction with KUSD
          </h1>
                <p className="text-gray-100 font-sans  mt-6 mb-9   text-md">
                    The integration of $BITS tokens with the soon-to-be-deployed USDC/USDT-backed KUSD, promotes market stability and accurate transaction reflections, enhancing user confidence. This strategic pairing is designed to increase demand for $BITS, fostering enhanced utility and user engagement due to its security and potential.
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
            <div className="w-[60%] flex mx-auto mt-22 justify-center items-center">
                <div className="w-full max-w-[600px] h-auto">
                    <OrbitingNewera />
                </div>
            </div>

        </section>
    );
};
export default NewEra;
