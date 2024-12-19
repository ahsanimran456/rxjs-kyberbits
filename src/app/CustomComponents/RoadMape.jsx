import React from 'react';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";
// import SparklesPreview from '../../components/HeroSectionText';
import { TextGenerate } from '../../components/HeroSectionText';
import { PrimaryBtn } from '../../components/PrimaryBtn';
import OrbitingNewera from '@/components/NewEraOrbit';
import { WorldMapDemo } from '@/components/MapViewCom';
import { AppleCardsCarouselDemo } from '@/components/webslider';

const RoadMape = () => {

    return (
        <section className="max-w-screen-xl mx-auto flex w-full px-6  text-white">
            <AppleCardsCarouselDemo/>

        </section>
    );
};
export default RoadMape;
