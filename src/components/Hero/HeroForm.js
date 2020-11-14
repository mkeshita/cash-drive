import React from "react";
import Select from "react-select";
import "./HeroForm.scss";

function HeroForm() {
  const options = [
    {value: "chocolate", label: "Chocolate"},
    {value: "strawberry", label: "Strawberry"},
    {value: "vanilla", label: "Vanilla"},
  ];
  //   return <Select options={options} />;
  return (
    <div className="row align-items-end mt-4" style={{maxWidth: "550px"}}>
      <div className="col-md-6 my-3">
        <label className="select__label">How much do you need?</label>
        <Select classNamePrefix="mySelect" options={options} />
      </div>
      <div className="col-md-6 my-3">
        <label className="select__label">How much do you need?</label>
        <Select classNamePrefix="mySelect" options={options} />
      </div>
      <div className="col-md-7 my-3">
        <label className="select__label">Your Repayment plan</label>
        <Select classNamePrefix="mySelect" options={options} />
      </div>
      <div className="col-md-5 my-3">
        <a
          href="#!"
          className="btn btn-block btn-orange shadow"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
          }}
        >
          Apply now
        </a>
      </div>
    </div>
  );
}

export default HeroForm;
