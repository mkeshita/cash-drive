import React from "react";
import Fade from "react-reveal/Fade";

function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-sm-3 text-align-right">
            <Fade left duration={800}>
              <h1 className="title mt-0" style={{fontSize: "3rem"}}>
                Our Story
              </h1>
            </Fade>
          </div>
          <div className="col-sm-9">
            <Fade bottom delay={400}>
              <p className="mb-4 pt-2">
                CashDrive is a technology enabled alternative financial services
                provider unlocking access to credit and deepening insurance
                penetration for the financially excluded and undeserved in
                Nigeria.
              </p>
            </Fade>
            <Fade bottom delay={700}>
              <p className="mb-4">
                We offer quick and competitive loans for individuals and
                businesses who own motor vehicles in Nigeria.
              </p>
            </Fade>
            <Fade bottom delay={900}>
              <p className="mb-4">
                Our value proposition is simple – “Unlock the cash in your car
                and still get to drive it”. Our secured lending product gives
                individuals and businesses an easier and alternative access to
                the finance they need to take advantage of the abundant
                opportunities to create wealth in Nigeria
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
