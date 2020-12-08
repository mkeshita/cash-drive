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
                CashDrive is a licensed technology-enabled financial services
                provider unlocking access to credit and driving insurance
                penetration in Nigeria and beyond, leveraging big data to
                provide individuals and businesses with alternative and
                supplemental sources of funding using liquid and moveable assets
                i.e. Cars, Cashflow as security. Our secured lending products
                give individuals and businesses faster and easier access to the
                finance they need to take advantage of the abundant
                opportunities to create wealth in Nigeria
              </p>
            </Fade>
            <Fade bottom delay={700}>
              <p className="mb-4">
                Access to credit is crucial for economic growth and is the
                engine for private sector development. Specifically, developing
                and promoting non-traditional, alternative credit products
                fosters private enterprise productivity and promotes
                formalization and inclusion of the informal sector. In Nigeria,
                credit penetration sits at an abysmal low 12.1%, while the SSA
                average is 47.9%. With a population of 200+ million people, only
                an average of 2.3 million Nigerians access loans annually
                largely driven by the dominance of loan products designed solely
                for salary earners and large corporates. According to the World
                Bank, more than half of the private enterprises (firms) in
                emerging markets have no access to credit. This percentage is
                even higher and reaches up to 80 per cent in the Middle East and
                SubSaharan Africa.
              </p>
            </Fade>
            <Fade bottom delay={900}>
              <p className="mb-4">
                With our secured lending products, CashDrive customers benefit
                from the ability to complete the loan process online, get
                instant approval decisions and same day cash funding. Our
                proprietary technology platform delivers new financial products
                to the millions of consumers outside the formal financial system
                who are seeking financial solutions that suit their needs and
                lifestyle
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
