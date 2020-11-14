import React from "react";
import Fade from "react-reveal/Fade";
import {NavLink} from "react-router-dom";
import "./CardItem.scss";

function CardItem({data}) {
  return (
    <Fade bottom delay={data.delay}>
      <div className="card-item position-relative">
        <span
          className="d-block position-absolute card-item__hover-bg"
          role="presentation"
        ></span>
        <div
          className="card-item__icon-container position-relative"
          style={{background: data.color}}
        >
          <img alt="icon" src={data.img} />
        </div>

        <h4 className="card-item__title mt-4 mb-3 position-relative">
          {data.title}
        </h4>
        <p className="position-relative">{data.textContent}</p>
        <NavLink
          to="/how-it-works"
          className="position-relative card-item__link"
          style={{zIndex: 2}}
        >
          View more{" "}
          <span className="d-inline-block pt-1">&nbsp;&nbsp;&#8594;</span>
        </NavLink>
      </div>
    </Fade>
  );
}

export default CardItem;
