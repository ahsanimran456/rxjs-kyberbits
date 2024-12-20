import React from 'react';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";
// import SparklesPreview from '../../components/HeroSectionText';
import { TextGenerate } from '../../components/HeroSectionText';
import { PrimaryBtn } from '../../components/PrimaryBtn';
import OrbitingNewera from '@/components/NewEraOrbit';
import { WorldMapDemo } from '@/components/MapViewCom';

const Tokenomics = () => {
    const words = `Shaping a New Era of Financial Interaction with KUSD`

    return (
        <section className="max-w-screen-xl mx-auto flex w-full mt-32 px-6  text-white">
                    <WorldMapDemo/>
        </section>
    );
};
export default Tokenomics;
