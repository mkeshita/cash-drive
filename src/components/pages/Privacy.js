import React, {useLayoutEffect} from "react";
import PrivacyContent from "../Privacy/PrivacyContent";
import PrivacyHero from "../Privacy/PrivacyHero";
import Strip from "../Strip/Strip";

function Privacy() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <PrivacyHero />
      <PrivacyContent />
      <Strip />
    </div>
  );
}

export default Privacy;
