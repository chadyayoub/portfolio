import React, { useCallback } from "react";
import "./landingPage.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const LandingPage = ({ style }) => {
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
    <>
      <div id="landingContainer">
        <div id="homeLeftContent">
          <p className="leftContentTitle">Ohayo sekai good morning world!</p>
          <p className="leftContentBody">
            Thank you for visiting my website! I am a developer based in
            lebanon, and i've worked on different types of software. My main
            skills are developing mobile apps natively in android and cross
            platform in react native. I also do web apps using plain html/css/js
            or using react, and also worked on some game projects for fun using
            unity engine.
          </p>
          <p id="button">
            <span>My work </span>
          </p>
        </div>
        <div id="imageContainer">
          <img id="image" src={require("../../assets/naruto.png")} alt="me" />
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 15,
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              options: {
                sides: 5,
              },
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },

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
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </>
  );
};
export default LandingPage;
