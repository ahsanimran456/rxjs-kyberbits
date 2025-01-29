"use client";
import { WorldMap } from "../components/ui/world-map";
import { motion } from "motion/react";
import { TextGenerate } from "./HeroSectionText";

export function WorldMapDemo() {
    const words = `Effortlessly Craft NFTs for Events and More with the KyberBits Platform Tools`;

    return (
        (<div className=" w-full">
            <div className="max-w-7xl mx-auto text-center">
                <p className="md:text-4xl text-center dark:text-white text-white text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                Tokenomics
                        {/* <TextGenerate words={'Tokenomics'} /> */}
                </p>
                <p className="text-sm md:text-lg text-white max-w-2xl mx-auto py-4 mb-14">
                The total supply of $BITS tokens will be determined by the amount sold during the presale, which will consistently represent 12.85% of the total supply. This approach ensures flexibility and scalability in managing the supply based on participant interest and investment.
                </p>
            </div>
            <WorldMap
                dots={[
                    // Existing connections
                    {
                        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                        end: { lat: 34.0522, lng: -118.2437 },   // Los Angeles
                    },
                    {
                        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                        end: { lat: -15.7975, lng: -47.8919 },   // Brazil (Brasília)
                    },
                    {
                        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        end: { lat: 38.7223, lng: -9.1393 },     // Lisbon
                    },
                    {
                        start: { lat: 51.5074, lng: -0.1278 },   // London
                        end: { lat: 28.6139, lng: 77.209 },      // New Delhi
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 },    // New Delhi
                        end: { lat: 43.1332, lng: 131.9113 },    // Vladivostok
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 },    // New Delhi
                        end: { lat: -1.2921, lng: 36.8219 },     // Nairobi
                    },
                    // Pakistan Connections
                    {
                        start: { lat: 33.6844, lng: 73.0479 },   // Islamabad, Pakistan
                        end: { lat: 25.276987, lng: 55.296249 }, // Dubai, UAE
                    },
                    {
                        start: { lat: 33.6844, lng: 73.0479 },   // Islamabad, Pakistan
                        end: { lat: -33.8688, lng: 151.2093 },   // Sydney, Australia
                    },
                    // Dubai Connections
                    {
                        start: { lat: 25.276987, lng: 55.296249 }, // Dubai, UAE
                        end: { lat: 40.7128, lng: -74.006 },       // New York, USA
                    },
                    {
                        start: { lat: 25.276987, lng: 55.296249 }, // Dubai, UAE
                        end: { lat: -37.8136, lng: 144.9631 },     // Melbourne, Australia
                    },
                    // Australia Connections
                    {
                        start: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
                        end: { lat: 35.6895, lng: 139.6917 },    // Tokyo, Japan
                    },
                    {
                        start: { lat: -37.8136, lng: 144.9631 }, // Melbourne, Australia
                        end: { lat: 51.5074, lng: -0.1278 },     // London
                    },
                    // America Connections
                    {
                        start: { lat: 40.7128, lng: -74.006 },    // New York, USA
                        end: { lat: 34.0522, lng: -118.2437 },    // Los Angeles
                    },
                    {
                        start: { lat: 40.7128, lng: -74.006 },    // New York, USA
                        end: { lat: 33.6844, lng: 73.0479 },      // Islamabad, Pakistan
                    },
                    {
                        start: { lat: 34.0522, lng: -118.2437 },  // Los Angeles, USA
                        end: { lat: 25.276987, lng: 55.296249 },  // Dubai, UAE
                    },
                ]}
            />
            <div className="max-w-7xl mt-10 mx-auto text-center">
                <p className="text-sm md:text-lg text-white max-w-2xl mx-auto py-4 mb-9">
                 The distribution of these tokens is meticulously planned to ensure the long-term sustainability and growth of the network.
                </p>
            </div>
        </div>)
    );
}
