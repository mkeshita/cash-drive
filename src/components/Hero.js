import React from "react";
import "./Hero.scss";
import "./HeroForm";
import HeroForm from "./HeroForm";

function Hero() {
  return (
    <div
      className="hero position-relative container-fluid"
      style={{
        backgroundImage: `url('./images/hero-bg.png')`,
        backgroundPosition: "55% bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img src="./images/hero-bg.jpg" className="hero__bg" /> */}
      <div className=" px-5 mx-0 mx-md-5">
        <div className="row">
          <div className="col-md-6">
            <h5 className="hero__title__small">Quick loans</h5>
            <h2 className="hero__title">For Car Owners</h2>
            <p className="hero__lead-text">
              Using your car as collateral and still drive it
            </p>
            <HeroForm />
          </div>
          <div className="col-md-6">
            <img src="./images/laptop.png" alt="header-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
