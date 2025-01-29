'use client'
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./components.module.css";
import Image from "next/image";
import Logo from '../../../public/logo.png'
import Logobg from '../../../public/logobg.png'
import orbit1 from '../../../public/orbit1.svg'
import orbitall from '../../../public/orbitall.svg'
import orbit3 from '../../../public/orbit3.svg'
import orbit4 from '../../../public/orbit4.svg'
import all from '../../../public/demo.jpeg'
import firstlayer from '../../../public/firstlayer.jpg'
import firstlayer1111 from '../../../public/front-banner.png'
import saxzc from '../../../public/0.jpg'
// import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const FirstLayer = () => {
    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.wrapper}`,
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: true,
                markers: false,
            },
        });

        timeline
            .to(`.${styles.image}`, {
                scale: 2,
                z: 350,
                transformOrigin: "center center",
                ease: "power1.inOut",
            })
            .to(
                `.${styles.hero}`,
                {
                    scale: 1.1,
                    transformOrigin: "center center",
                    ease: "power1.inOut",
                },
                "<"
            );
    }, []);
    useEffect(() => {
        const orbitIcons = document.querySelectorAll(
            `.${styles.orbitIcon}, .${styles.orbitIcon2}, .${styles.orbitIcon3}, .${styles.orbitIcon4}`
        );

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;

            orbitIcons.forEach((icon, index) => {
                const movementStrength = 50 + index * 20; // Increased movement strength for more noticeable effect
                const moveX = (clientX / window.innerWidth - 0.5) * movementStrength;
                const moveY = (clientY / window.innerHeight - 0.5) * movementStrength;

                gsap.to(icon, {
                    x: moveX,
                    y: moveY,
                    duration: 0.5,
                    ease: "power1.out",
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <div className={styles.wrapper}>
            {/* <Navbar /> */}
            <div className={styles.content}>
                <section className={`${styles.section} ${styles.hero}`}>
                    <Image
                        src={orbitall}

                        alt="orbit-icon"
                        className={styles.orbiticonbg}
                    />
                    <div className={styles.orbitContainer}>
                        <div className={styles.orbit}>
                            <Image
                                src={orbit1}
                                width={40}
                                height={40}
                                alt="orbit-icon"
                                className={styles.orbitIcon}
                            />
                        </div>
                        <div className={styles.orbit}>
                            <Image
                                src={orbit1}
                                width={40}
                                height={40}
                                alt="orbit-icon"
                                className={styles.orbitIcon2}
                            />
                            <Image
                                src={orbit4}
                                width={40}
                                height={40}
                                alt="orbit-icon"
                                className={styles.orbitIcon4}
                            />
                        </div>
                        <div className={styles.orbit}>
                            <Image
                                src={orbit3}
                                width={60}
                                height={60}
                                alt="orbit-icon"
                                className={styles.orbitIcon3}
                            />
                        </div>
                    </div>
                    <div className={styles.heroContent}>
                        <Image
                            src={Logo}
                            width={420}
                            height={400}
                            quality={100}
                            alt="logo"
                            priority
                            className={styles.rotatingImage}
                        />
                        <Image
                            src={Logobg}
                            width={450} // Ensure this matches the desired display size
                            height={450} // Optional, for a square logo
                            quality={100} // High-quality rendering
                            alt="logobg"
                            priority
                            className={`${styles.backgroundImage}`}
                        />

                    </div>
                    <div className={styles.herosectionBanner}>
                        <div className={styles.herosectionBannerInnerImage}>
                            <div className={styles.innertextHeading}>
                                <div className="max-w-4xl">
                                    {/* <TextGenerate words={title} /> */}

                                    <h1 className='text-4xl leading-3 font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
                                        KyberBits: The World's First Layer 1, Web3 Aggregated Ecosystem
                                    </h1>

                                </div>
                                <div className={styles.innertextParaContainer}>
                                    <p className="font-sans text-lg leading-loose max-w-2xl">
                                        That Unites Leading Blockchains Including Bitcoin, Ethereum, Solana & More.
                                    </p>
                                </div>
                                <div className={styles.innertextParainer}>
                                    <p className="font-sans mx-auto text-sm leading-loose max-w-2xl">
                                        Kyberbits Network is redefining blockchain technology. We aim to build a highly efficient, self-sustaining ecosystem designed to effortlessly manage a large number of transactions.
                                    </p>
                                </div>
                                <div className={styles.buttonContainer}>
                                <button
                                className="px-6 py-3 text-xs min-w-48  text-black font-semibold rounded-full shadow-lg bg-gradient-to-r from-green-200 via-blue-400 to-purple-500 hover:opacity-90 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Join Presale
                            </button>

                            {/* Dark Button */}
                            <button
                                className="px-6 py-3 text-sm text-white min-w-48 font-semibold rounded-full shadow-lg bg-[#1a1a1a] hover:bg-[#333] transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                How to buy?
                            </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className={`${styles.section} ${styles.gradientPurple}  mx-auto flex items-center  h-screen text-white `}>
                    {/* Left Side: Gradient Text & Buttons */}
                    <div className="w-[50%] flex  " style={{ marginTop: '6rem' }}>
                        <div className="w-full max-w-[600px] h-auto mx-auto flex items-center justify-center">
                            {/* <MobileFrame src={mobile} /> */}
                            <Image
                                src={saxzc}
                                width={400}
                                height={400}
                                alt="all"


                            />
                        </div>
                    </div>
                    <div className="w-[50%] flex flex-col mt-24 p-8 space-y-8">
                        {/* Gradient Heading */}
                        <h1 className="text-5xl leading-tight font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                            The KyberBits All-In-One Crypto Powerhouse
                        </h1>
                        <p className="text-gray-500 font-sans  text-md">
                            Meet the KyberBits multi-chain crypto Wallet—a non-custodial, open-source powerhouse. Enjoy feeless $BITS transfers in-app, debit & virtual cards, seamless Apple Pay and Google Pay integration, a decentralized VPN (dVPN) service, and access to a tokenized asset marketplace, all conveniently housed in one application.
                        </p>
                        <div className="flex space-x-6">
                            {/* <button className="px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-green-400 via-yellow-400 to-purple-500 hover:scale-105 transition-transform">
                                Join Presale
                            </button>
                            <button className="px-6 py-3 rounded-full bg-black border border-gray-700 hover:bg-gray-800 transition">
                                How to buy?
                            </button> */}
                            <button
                                className="px-6 py-3 text-xs min-w-48  text-black font-semibold rounded-full shadow-lg bg-gradient-to-r from-green-200 via-blue-400 to-purple-500 hover:opacity-90 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Join Presale
                            </button>

                            {/* Dark Button */}
                            <button
                                className="px-6 py-3 text-sm text-white min-w-48 font-semibold rounded-full shadow-lg bg-[#1a1a1a] hover:bg-[#333] transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                How to buy?
                            </button>
                        </div>

                    </div>

                </section>
                {/* <section className={`${styles.section} ${styles.gradientBlue}`}></section> */}
            </div>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={firstlayer1111.src}
                    // src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
                    alt="hero"
                />
            </div>
        </div>
    );
};

export default FirstLayer;
