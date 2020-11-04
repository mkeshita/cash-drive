import React, {useState} from "react";
import Dropdown from "./Dropdown";
import data from "../data/year.json";
import dataTwo from "../data/ran.json";
import Fade from "react-reveal/Fade";

function LoanCalculator() {
  const prompt1 = "Select Year";
  const prompt2 = "Car make";
  // const prompt3 = "Car make";
  // const prompt4 = "Body style";

  const [value, setValue] = useState(null);
  const [valueTwo, setValueTwo] = useState(null);
  return (
    <form className="form-restrict position-relative">
      <Fade bottom cascade>
        <div className="position-relative">
          <Dropdown
            options={data.reverse()}
            label="year"
            id="id"
            prompt={prompt1}
            value={value}
            onChange={(val) => setValue(val)}
          />
        </div>

        <div className="position-relative">
          <Dropdown
            options={dataTwo}
            label="type"
            id="id"
            prompt={prompt2}
            value={valueTwo}
            onChange={(val) => setValueTwo(val)}
          />
        </div>
        <div className="position-relative">
          <Dropdown
            options={dataTwo}
            label="type"
            id="id"
            prompt={prompt2}
            value={valueTwo}
            onChange={(val) => setValueTwo(val)}
          />
        </div>
        <div className="position-relative">
          <Dropdown
            options={dataTwo}
            label="type"
            id="id"
            prompt={prompt2}
            value={valueTwo}
            onChange={(val) => setValueTwo(val)}
          />
        </div>
      </Fade>
      {/* <Dropdown options={data.reverse()} label="year" id="id" prompt={prompt3} value={value} onChange={val => setValue(val)} />
            <Dropdown options={data.reverse()} label="year" id="id" prompt={prompt4} value={value} onChange={val => setValue(val)} /> */}

      <button className="btn px-5 mt-3 btn-orange">Get offer</button>
    </form>
  );
}

export default LoanCalculator;
