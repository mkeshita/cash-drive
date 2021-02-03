import React from "react";
import OurCultureSlide from "./OurCultureSlide";
import OurCultureSlideTwo from "./OurCultureSlideTwo";

function OurCultureSlideContainer() {
  return (
    <section className="section section--bg">
      <div className="container">
        <h2 className="text-center title">Meet Our People</h2>
        <p className="text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>
      <OurCultureSlideTwo />
      <br />
      <br />
      <OurCultureSlide />
    </section>
  );
}

export default OurCultureSlideContainer;
