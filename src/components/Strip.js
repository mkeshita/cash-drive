import React from "react";
import Fade from "react-reveal/Fade";
import "./Strip.scss";

function Strip() {
  return (
    <Fade bottom>
      <div className="container">
        <div
          className="strip flex-wrap d-sm-flex align-items-center justify-content-between"
          style={{
            backgroundImage: `url(./images/car-strip.png)`,
            backgroundColor: "#153e74",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <Fade left delay={700} duration={1500}>
            <h2 className="text-white title">
              Get instant loan <br className="d-none d-md-block" /> using your
              ride
            </h2>
          </Fade>
          <Fade bottom delay={1100}>
            <div className="text-left mt-5 mt-md-0 text-md-right position-relateive d-flex  flex-column">
              <a
                href="#!"
                className="btn btn-sm-inline-block text-center strip__btn bg-white px-5 mb-2 align-self-start align-self-md-end d-flex align-items-center"
              >
                Get Offer
              </a>
              <span className="text-white">
                Don’t take our word for it, apply for a loan
              </span>
              <img
                src="./images/strip-img.png"
                className="position-absolute"
                alt="pattern"
                style={{bottom: 0, maxWidth: "130px", right: "5rem"}}
              />
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}

export default Strip;
