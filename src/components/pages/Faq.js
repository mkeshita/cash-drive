import React, {useLayoutEffect} from "react";
import FaqHero from "../Faq/FaqHero";

function Faq() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return <FaqHero />;
}

export default Faq;
