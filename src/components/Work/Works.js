import React from "react";
import Cards from "../Card/Cards";
import Fade from "react-reveal/Fade";

function Works() {
  return (
    <section id="how-it-works" className="section section--bg">
      <div className="container">
        <Fade top>
          <h2 className="title text-center">How it works</h2>
          <p className="text-center sub">
            Using your car as collateral and still drive it
          </p>
        </Fade>
        <Cards />
      </div>
    </section>
  );
}

export default Works;

// sorogate mother
