import React from "react";
import AboutHero from "../AboutHero";
import Strip from "../Strip";
import AboutSection from "../AboutSection";
import AboutSectionTwo from "../AboutSectionTwo";
import Testimonial from "../Testimonial";

function About() {
  return (
    <>
      <about>
        <AboutHero />
        <AboutSection />
        <AboutSectionTwo />
        <Testimonial />
        <Strip />
      </about>
    </>
  );
}

export default About;
