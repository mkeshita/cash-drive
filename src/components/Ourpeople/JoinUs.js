import React from "react";
import {NavLink} from "react-router-dom";

function JoinUs() {
  return (
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
        <h2 className="text-white title">Join our team</h2>

        <div className="text-left mt-5 mt-md-0 text-md-right position-relateive d-flex  flex-column">
          <NavLink
            to="/contact"
            className="btn btn-sm-inline-block text-center strip__btn bg-white px-5 mb-2 align-self-start align-self-md-end d-flex align-items-center"
          >
            Contact Us
          </NavLink>
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
      </div>
    </div>
  );
}

export default JoinUs;
