import ParticleComponent from "../_components/ParticleComponent";
import { TypeAnimation } from "react-type-animation";
import profilePic from "/public/Eric-profile.jpg";
import Image from "next/image";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <section className="container w-screen h-screen mx-auto flex flex-col  items-center justify-center  md:flex-row">
      <div className="flex justify-center items-center text-6xl font-semibold h-1/3 md:w-1/3">
        <p>
          Hey! 👋
          <br />
          I&apos;m <span className="text-accent">Eric</span>!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center h-1/3 md:w-1/3">
        <Image
          src={profilePic}
          alt="Eric"
          className="object-cover rounded-full animate-levitate w-[50%] md:w-full"
        />
        <div className="h-1/4 z-10">
          <HeroButtons />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-6xl font-semibold h-1/3 md:w-1/3 pt-10 md:pt-0">
        <p>
          I'm a <span> </span>
        </p>
        <p>
          <HeroDescription />
        </p>
      </div>

      <ParticleComponent />
    </section>
  );
}

export default Hero;
