import React from "react";
import Culture from "../Ourpeople/Culture";
import FirstSection from "../Ourpeople/FirstSec";
import JoinUs from "../Ourpeople/JoinUs";
import OurCultureSlideContainer from "../Ourpeople/OurCultureSlideContainer";
import OurPeopleHero from "../Ourpeople/OurPeopleHero";
import Testimonial from "../Testimonial/Testimonial";

function OurPeople() {
  return (
    <>
      <OurPeopleHero />
      <FirstSection />
      <Culture />
      <OurCultureSlideContainer />
      <Testimonial />
      <JoinUs />
    </>
  );
}

export default OurPeople;
