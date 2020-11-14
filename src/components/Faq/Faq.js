import React from "react";
import FaqItem from "./FaqItem";
import data from "../../data/faq.json";
import {NavLink} from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./Faq.scss";

function Faq() {
  return (
    <section className="section section--bg">
      <div className="container">
        <Fade top>
          <h2 className="title text-center mb-5">Frequently Asked Questions</h2>
        </Fade>
        <div className="row">
          <div className="col-md-10 mx-auto">
            {data.slice(0, 5).map((faq, index) => (
              <FaqItem data={faq} key={index} />
            ))}

            <div className="text-center">
              <NavLink
                to="/faq"
                className="btn btn-outline btn-sm mt-3 d-inline-flex px-4 align-items-center"
                exact
              >
                View more
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
