import React from "react";
import "./CardItem.scss";

function CardItem({data}) {
  return (
    <div className="card-item position-relative">
      <span
        className="d-block position-absolute card-item__hover-bg"
        role="presentation"
      ></span>
      <div
        className="card-item__icon-container position-relative"
        style={{background: data.color}}
      >
        <img alt="icon" alt="icon" src={data.img} />
      </div>

      <h4 className="card-item__title mt-4 mb-3 position-relative">
        {data.title}
      </h4>
      <p className="position-relative">{data.textContent}</p>
    </div>
  );
}

export default CardItem;
