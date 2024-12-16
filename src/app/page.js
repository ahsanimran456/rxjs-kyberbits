import Image from "next/image";
import Navbar from "./CustomComponents/Navbar";
import HeroSection from "./CustomComponents/HeroSection";
import React from "react";
import PowerHouse from "./CustomComponents/PowerHouse";
import Platform from "./CustomComponents/Platform";
import Network from "./CustomComponents/Network";
import VPN from "./CustomComponents/VPN";
import Transforamtive from "./CustomComponents/Transformative";

export default function Home() {
  return (
    <React.Fragment>
    <Navbar/>
    <HeroSection/>
    <PowerHouse/>
    <Platform/>
    <Network/>
    <VPN/>
    <Transforamtive/>
    </React.Fragment>
  );
}
