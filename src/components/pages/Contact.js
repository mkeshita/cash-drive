import React, {useLayoutEffect} from "react";
import ContactContent from "../Contact/ContactContent";
import ContactHero from "../Contact/ContactHero";
import Strip from "../Strip/Strip";

function Contact() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <ContactHero />
      <ContactContent />
      <Strip />
    </>
  );
}

export default Contact;
