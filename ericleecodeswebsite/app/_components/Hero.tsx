import ParticleComponent from "../_components/ParticleComponent";
import { TypeAnimation } from "react-type-animation";
import profilePic from "/public/Eric-profile.jpg";
import Image from "next/image";
import HeroDescription from "./HeroDescription";

function Hero() {
  return (
    <div className="flex items-center justify-around w-[85%] h-screen mx-auto sm:flex-col md:flex-row">
      <div className="flex items-center justify-center sm:w-[80%] md:w-[33%] ">
        <h1 className="sm:mt-[20%] md:mt-auto sm:text-7xl font-extrabold text-lighter pb-3">
          Hey! 👋
          <br />
          I&apos;m <span className="text-accent">Eric</span>!
        </h1>
      </div>
      <div className="sm:w-[70%] md:w-[33%] align-middle">
        <Image
          src={profilePic}
          alt="Eric"
          className="object-cover rounded-full animate-levitate"
        />
      </div>

      <div className="flex-col items-center justify-around col pt-5 text-7xl font-extrabold text-lighter sm:w-[80%] md:w-[33%] sm:ml-[35%] md:ml-[7%] sm:pb-5 md:pb-0">
        I am a <span> </span>
        <br />
        <HeroDescription />
      </div>

      <ParticleComponent />
    </div>
  );
}

export default Hero;
