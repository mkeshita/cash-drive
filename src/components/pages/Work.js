import React, {useLayoutEffect} from "react";
import WorkHero from "../Work/WorkHero";
import WorkBody from "../Work/WorkBody";
import "../Work/Work.scss";

function Work() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <WorkHero />
      <WorkBody />
    </div>
  );
}

export default Work;
