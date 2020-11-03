import React from "react";
import "./Strip.scss";

function Strip() {
  return (
    <div className="container">
      <div className="strip d-flex align-items-center justify-content-between">
        <h2 className="text-white title">
          Get instant loan <br className="d-none d-md-block" /> using your ride
        </h2>

        <div className="text-right position-relateive d-flex justify-content-end flex-column">
          <a
            href=""
            className="btn strip__btn bg-white px-5 mb-2 align-self-end d-flex align-items-center"
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
      </div>
    </div>
  );
}

export default Strip;
