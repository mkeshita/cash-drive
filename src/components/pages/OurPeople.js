import React, {useLayoutEffect} from "react";
import TeamModal from "../Modal/TeamModal";
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
      <TeamModal />
      <OurPeopleHero />
      <FirstSection />
      <OurCultureSlideContainer />
      <Testimonial />
      <JoinUs />
    </>
  );
}

export default OurPeople;
