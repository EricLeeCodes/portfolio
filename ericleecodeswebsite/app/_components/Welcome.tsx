"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function WelcomePage() {
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    const removeMount = setTimeout(() => {
      setIsMounted(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeMount);
    };
  }, []);

  useEffect(() => {
    if (!isMounted) {
      document.body.style.overflow = "auto";
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-center h-screen w-[100%] fixed z-50 overflow-hidden bg-darker transition-opacity duration-1000 ${isFading ? "opacity-0" : "opacity-100"}`}
    >
      <h1>
        <TypeAnimation
          sequence={["EricLeeCodes", 1000]}
          wrapper="span"
          speed={50}
          repeat={1}
          cursor={false}
          className="text-white text-5xl md:text-7xl font-bold "
        />
      </h1>
    </div>
  );
}

export default WelcomePage;
