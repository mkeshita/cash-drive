import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import year from "../data/year.json";
import Fade from "react-reveal/Fade";

function LoanCalculator() {
  return (
    <form className="form-restrict position-relative">
      <Fade bottom cascade>
        <div className="position-relative">
          <Dropdown placeholder="Year" options={year.reverse()} />
        </div>
        <div className="position-relative">
          <Dropdown placeholder="Make" options={year.reverse()} />
        </div>
        <div className="position-relative">
          <Dropdown placeholder="Model" options={year.reverse()} />
        </div>
        <div className="position-relative">
          <Dropdown placeholder="Body Style" options={year.reverse()} />
        </div>
      </Fade>

      <button className="btn px-5 mt-3 btn-orange">Get offer</button>
    </form>
  );
}

export default LoanCalculator;
