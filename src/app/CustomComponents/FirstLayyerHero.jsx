"use client"
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroSection.module.css";
import firstlayer from '../../../public/front-banner.png'


gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.wrapper}`,
                start: "top-=0 top", 
                end: "+=150%",
                pin: true,
                scrub: true,
                markers: true,
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <section className={`${styles.section} ${styles.hero}`}>

            <div >
                <div className="">
                <h1 className=' mt-[20%] text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
                    KyberBits:The World's First Layer 1, Web3 Aggregated Ecosystem
                </h1>
                </div>
            </div>
           
        </section>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={firstlayer.src}
          alt="image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
