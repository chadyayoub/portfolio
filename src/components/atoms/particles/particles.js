import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const AppParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        interactivity: {
          detect_on: "window",
          modes: {
            repulse: {
              distance: 100,
            },
            bubble: {
              distance: 300,
              size: 20,
            },
            connect: {
              radius: 200,
            },
          },
          events: {
            onHover: {
              enable: true,
              mode: ["connect", "bubble"],
              parallax: {
                enable: true,
                force: 50,
                smooth: 10,
              },
            },
          },
        },
        fps_limit: 240,
        particles: {
          number: {
            value: 200,
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.1,
              sync: true,
            },
          },
          color: "#aaaadd",
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};
export default AppParticles;
