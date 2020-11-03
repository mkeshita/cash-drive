import React from "react";
import "./Tabs.scss";

function Tabs({active, onclick}) {
  return (
    <div className="tabs row ">
      <div
        className={`col-6 tabs__inner ${active ? "active" : "null"}`}
        onClick={() => {
          if (!active) return onclick(active);
        }}
      >
        <span className="text-truncate">Know how much you can borrow</span>
      </div>
      <div
        className={`col-6 tabs__inner p-0 ${!active ? "active" : "null"}`}
        onClick={() => {
          if (active) return onclick(active);
        }}
      >
        <span className="text-truncate">Get your car valuation</span>
      </div>
    </div>
  );
}

export default Tabs;
