import React, {useState} from "react";
import LoanCalculator from "./LoanCalculator";
import Tabs from "./Tabs";
import "./Evaluate.scss";

function Evaluate() {
  // const [tabState, setTabState] = useState(true);
  const [active, setActive] = useState(true);

  return (
    <section className="section position-relative">
      <img
        src="./images/e-pattern.png"
        className="position-absolute eval__pattern"
      />
      <div className="container">
        <h3 className="title">Evaluate your car</h3>

        <p className="sub">
          Know the worth of your car, and get estimated loan offers.
        </p>

        <div className="row eval align-items-start justify-content-between">
          <div className="col-md-6 position-relative">
            <img
              src="./images/evaluate-icon.svg"
              alt="icon"
              className="eval__icon mt-5"
            />
          </div>

          <div className="col-md-5 position-relative eval__space">
            <Tabs active={active} onclick={(active) => setActive(!active)} />

            {active ? <LoanCalculator /> : <div> it works</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Evaluate;
