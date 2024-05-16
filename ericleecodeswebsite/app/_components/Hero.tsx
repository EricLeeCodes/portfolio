import ParticleComponent from "../_components/ParticleComponent";
import { TypeAnimation } from "react-type-animation";
import profilePic from "/public/Eric-profile.jpg";
import Image from "next/image";
import HeroDescription from "./HeroDescription";

function Hero() {
  return (
    <div className=" w-[80%] flex items-center justify-around h-screen">
      <div className=" w-[30%] items-center">
        <Image
          src={profilePic}
          alt="Eric"
          className="object-cover rounded-full items-center"
        />
      </div>
      <div>
        <h1 className="text-7xl font-extrabold text-lighter pb-3">Hey! 👋</h1>
        <h1 className="text-7xl font-extrabold text-lighter">
          I&apos;m <span className="text-accent">Eric</span>!
        </h1>
        <div className="absolute pt-5 text-7xl font-extrabold text-lighter">
          I am a <span> </span>
          <HeroDescription />
        </div>
      </div>

      <ParticleComponent />
    </div>
  );
}

export default Hero;
