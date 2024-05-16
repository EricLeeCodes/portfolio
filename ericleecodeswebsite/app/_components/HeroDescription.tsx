"use client";

import { TypeAnimation } from "react-type-animation";

const HeroDescription = () => {
  return (
    <TypeAnimation
      sequence={[
        "Developer",
        2000,
        "Creative",
        2000,
        "Programmer",
        2000,
        "Coder",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-accentTwo"
    />
  );
};

export default HeroDescription;
