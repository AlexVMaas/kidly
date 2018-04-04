import React from "react";
import "./Hero.css";

const Hero = props => (
  <div className="hero text-center" style={{ backgroundImage: "url(images/background-image.jpg)" }}>
    {props.children}
  </div>
);

export default Hero;
