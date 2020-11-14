import React from "react";
import Hero from "../Hero/Hero";
import Why from "../Why/Why";
import Works from "../Work/Works";
import Evaluate from "../Evaluate/Evaluate";
import ExSec from "../Ex/ExSec";
import Testimonial from "../Testimonial/Testimonial";
import Faq from "../Faq/Faq";
import Strip from "../Strip/Strip";

function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Works />
      <Evaluate />
      <ExSec />
      <Faq />
      <Testimonial />
      <Strip />
    </>
  );
}

export default Home;
