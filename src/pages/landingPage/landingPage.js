import React from "react";
import Text from "../../components/atoms/text/text";
import "./landingPage.css";

const LandingPage = ({ style }) => (
  <div id="landingContainer">
    <div id="homeLeftContent">
      <p className="leftContentTitle">Ohayo sekai good morning world!</p>
      <p className="leftContentBody">
        Thank you for visiting my website! I am a developer based in lebanon,
        and i've worked on different types of software. My main skills are
        developing mobile apps natively in android and cross platform in react
        native. I also do web apps using plain html/css/js or using react, and
        also worked on some game projects for fun using unity engine.
      </p>
      <p id="button">My work</p>
    </div>
    <div id="imageContainer">
      <img id="image" src={require("../../assets/naruto.png")} alt="me" />
    </div>
  </div>
);
export default LandingPage;
