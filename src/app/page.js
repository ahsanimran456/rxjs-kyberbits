import Image from "next/image";
import Navbar from "./CustomComponents/Navbar";
import HeroSection from "./CustomComponents/HeroSection";
import React from "react";
import PowerHouse from "./CustomComponents/PowerHouse";
import Platform from "./CustomComponents/Platform";
import Network from "./CustomComponents/Network";
import VPN from "./CustomComponents/VPN";
import Transforamtive from "./CustomComponents/Transformative";
import KyberBitsTools from "./CustomComponents/KyberBitsTools";
import Streamline from "./CustomComponents/Streamline";
import NewEra from "./CustomComponents/NewEra";
import Tokenomics from "./CustomComponents/Tokenomics";
import RoadMape from "./CustomComponents/RoadMape";
import QNA from "./CustomComponents/QNA";
import Footer from "./CustomComponents/Footer";
import FirstLayer from "./CustomComponents/FirstLayer";

export default function Home() {
  return (
    <React.Fragment>
    <Navbar/>
    <FirstLayer/>
    {/* <HeroSection/> */}
    {/* <FirstLayyerHero/> */}

    {/* <PowerHouse/> */}
    <Platform/>
    <Network/>
    <VPN/>
    <Transforamtive/>
    <KyberBitsTools/>
    <Streamline/>
    <NewEra/>
    <Tokenomics/>
    <RoadMape/>
    <QNA/>
    <Footer/>

    </React.Fragment>
  );
}
