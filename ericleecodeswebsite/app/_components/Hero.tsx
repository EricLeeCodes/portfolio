import ParticleComponent from "../_components/ParticleComponent";
import profilePic from "/public/Eric-profile.jpg";
import Image from "next/image";

function Hero() {
  return (
    <div className=" w-[80%] mx-auto flex items-center justify-around h-screen">
      <div>
        <h1 className="text-7xl font-extrabold text-lighter pb-3">Hey! 👋</h1>
        <h1 className="text-7xl font-extrabold text-lighter">
          I&apos;m <span className="text-accent">Eric</span>!
        </h1>
      </div>
      <div className=" w-[30%] items-center">
        <Image
          src={profilePic}
          alt="Eric"
          className="object-cover rounded-full items-center"
        />
      </div>
      <ParticleComponent />
    </div>
  );
}

export default Hero;
