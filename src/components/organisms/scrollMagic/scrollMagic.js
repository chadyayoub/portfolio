import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "gsap/gsap-core";

const ScrollMagic = () => (
  <Controller>
    <Scene duration={1000} pin indicators triggerHook="onLeave">
      {(progress) => (
        <div
          style={{
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        ></div>
      )}
    </Scene>
  </Controller>
);
export default ScrollMagic;
