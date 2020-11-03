import React from "react";
import WhyList from "./WhyList";
import "./Why.scss";

function Why() {
  return (
    <section className="section position-relative">
      <img
        src="./images/why-bg.png"
        alt="absolute background"
        className="position-absolute why__bg"
      />
      <img
        src="./images/semi-dot.png"
        alt="pattern"
        className="position-absolute why__dots"
      />
      <div className="container">
        <h4 className="title--small">What people are saying</h4>
        <h3 className="title">Why Cashdrive</h3>

        <WhyList />
      </div>
    </section>
  );
}

export default Why;
