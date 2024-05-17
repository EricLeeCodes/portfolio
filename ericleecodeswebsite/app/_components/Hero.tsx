import ParticleComponent from "../_components/ParticleComponent";
import { TypeAnimation } from "react-type-animation";
import profilePic from "/public/Eric-profile.jpg";
import Image from "next/image";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <section>
      <div className="">
        <p className="">
          Hey! 👋
          <br />
          I&apos;m <span className="text-accent">Eric</span>!
        </p>
      </div>
      <div className="">
        <Image
          src={profilePic}
          alt="Eric"
          className="object-cover rounded-full animate-levitate"
        />
        <HeroButtons />
      </div>

      <div className="">
        I am a <span> </span>
        <br />
        <HeroDescription />
      </div>

      <ParticleComponent />
    </section>
  );
}

export default Hero;
