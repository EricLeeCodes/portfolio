"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use

const ParticleComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#3b48a7",
        },
      },
      fps_limit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 50,
            duration: 1,
            speed: 0.2,
            easing: "ease-out",
          },
        },
      },
      particles: {
        number: {
          value: 100, // Adjust the number of stars
          density: {
            enable: true,
            area: 800, // Adjust the area to spread stars
          },
        },
        color: {
          value: ["#ffffff", "#ffcc00"], // Adjust the color of the stars
        },
        opacity: {
          value: {
            min: 0.1, // Set minimum opacity
            max: 1, // Set maximum opacity
          },
          random: true,
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
        },
        move: {
          enable: true,
          speed: 0.5,
        },
        links: {
          enable: false,
        },
        rotate: {
          value: 360,
          random: true,
        },
        shape: {
          type: "star", // Set the shape of the particles to star
        },
        life: {
          duration: {
            min: 0.2,
            max: 2,
          },
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="z-[-1] absolute inset-0"
      />
    );
  }

  return <></>;
};

export default ParticleComponent;
