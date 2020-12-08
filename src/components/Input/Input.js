import React from "react";
import "./Input.scss";

function Input({value, handlechange}) {
  return (
    <>
      <input
        type="text"
        className="custom-input"
        value={value}
        onChange={(e) => handlechange(e)}
        placeholder="Enter Amount..."
      />
    </>
  );
}

export default Input;
