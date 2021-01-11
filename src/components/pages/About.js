import React, {useLayoutEffect} from "react";
import AboutHero from "../About/AboutHero";
import Strip from "../Strip/Strip";
import AboutSection from "../About/AboutSection";
import AboutSectionTwo from "../About/AboutSectionTwo";
import Testimonial from "../Testimonial/Testimonial";

function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <AboutHero />
      <AboutSection />
      <AboutSectionTwo />
      <Testimonial />
      <Strip />
    </>
  );
}

export default About;
