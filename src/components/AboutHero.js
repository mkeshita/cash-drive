import React from "react";
import "./AboutHero.scss";

function AboutHero() {
  return (
    <div
      className="d-flex justify-content-center align-items-center about__hero"
      style={{
        backgroundImage: `url(./images/faq.bg.png)`,
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "right -50%",
        backgroundSize: "contain",
      }}
    >
      <h1 className="title">About Cashdrive Loans</h1>
    </div>
  );
}

export default AboutHero;
