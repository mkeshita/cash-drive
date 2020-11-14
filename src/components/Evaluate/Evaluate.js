import React from "react";
import LoanCalculator from "../LoanCalculator";
// import Tabs from "./Tabs";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import "./Evaluate.scss";

function Evaluate() {
  return (
    <section className="section position-relative">
      <img
        src="./images/e-pattern.png"
        className="position-absolute eval__pattern"
        alt="pattern"
      />
      <div className="container">
        <Slide left>
          <h3 className="title">Evaluate your car</h3>

          <p className="sub">
            Know the worth of your car, and get estimated loan offers.
          </p>
        </Slide>

        <div className="row eval align-items-start justify-content-between">
          <div className="col-md-6 position-relative">
            <Zoom>
              <img
                src="./images/evaluate-icon.svg"
                alt="icon"
                className="eval__icon mt-5"
              />
            </Zoom>
          </div>

          <div className="col-md-5 position-relative eval__space">
            <h3
              style={{fontWeight: 600, borderBottom: "2px solid #E26511"}}
              className="mb-5 pb-2 d-inline-block"
            >
              Know how much you can borrow
            </h3>
            <LoanCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Evaluate;
