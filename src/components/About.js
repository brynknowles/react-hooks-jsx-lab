import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a 46 year old Full Stack Software Engineer who will graduate from Flatiron School in February of 2021</p>
      <img src={image} alt="I made this" />
    </div>
  )
}

export default About;
