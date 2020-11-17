import React from "react";
import Select from "react-select";
import "./Dropdown.scss";

function Dropdown({options, placeholder}) {
  return (
    <div className="c-dropdown mb-4">
      <Select
        placeholder={placeholder + "..."}
        classNamePrefix="mySelect"
        options={options}
      />
    </div>
  );
}

export default Dropdown;
