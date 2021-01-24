import React, {useLayoutEffect} from "react";
import FirstSection from "../Ourpeople/FirstSec";
import JoinUs from "../Ourpeople/JoinUs";
import OurCultureSlideContainer from "../Ourpeople/OurCultureSlideContainer";
import OurPeopleHero from "../Ourpeople/OurPeopleHero";
import Testimonial from "../Testimonial/Testimonial";

function OurPeople() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <OurPeopleHero />
      <FirstSection />
      <OurCultureSlideContainer />
      <Testimonial />
      <JoinUs />
    </>
  );
}

export default OurPeople;
