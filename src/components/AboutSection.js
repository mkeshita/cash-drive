import React from "react";

function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-sm-3 text-align-right">
            <h1 className="title mt-3" style={{fontSize: "3rem"}}>
              Our Story
            </h1>
          </div>
          <div className="col-sm-9">
            <p className="mb-4">
              CashDrive is a technology enabled alternative financial services
              provider unlocking access to credit and deepening insurance
              penetration for the financially excluded and undeserved in
              Nigeria.
            </p>
            <p className="mb-4">
              We offer quick and competitive loans for individuals and
              businesses who own motor vehicles in Nigeria.
            </p>
            <p className="mb-4">
              Our value proposition is simple – “Unlock the cash in your car and
              still get to drive it”. Our secured lending product gives
              individuals and businesses an easier and alternative access to the
              finance they need to take advantage of the abundant opportunities
              to create wealth in Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
