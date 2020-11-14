import React from "react";
import FaqItem from "./FaqItem";
import data from "../../data/faq.json";
import Strip from "../Strip/Strip";

function FaqHero() {
  const styles = {
    boxShadow: "none",
    border: "1px solid #153E74#",
  };
  return (
    <>
      <div
        className="hero__faq"
        style={{
          backgroundImage: `url(./images/faq.bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="title text-center mt-3">
          Frequently Asked
          <br />
          Questions
        </h1>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 mt-4">
            <div
              className="rounded"
              style={{
                background: "#F6F7F8",
                padding: "2rem",
                position: "sticky",
                top: "16px",
              }}
            >
              <h5 className="border-bottom" style={{paddingBottom: "1.5rem"}}>
                Need Assistance?
              </h5>
              <div className="d-flex align-items-center py-3 mt-4">
                <img
                  src="./images/phone.svg"
                  className="d-block"
                  alt="icon"
                  style={{marginRight: "1.5rem", marginBottom: "11px"}}
                />
                <p>08028572566 / 07034912176</p>
              </div>
              <div className="p-4" style={{background: "#fff"}}>
                <div className="d-flex mt-3 align-items-end">
                  <span
                    className="d-block position-relative"
                    style={{marginBottom: "20px", marginRight: "1.5rem"}}
                  >
                    <img
                      src="./images/clock.svg"
                      alt="icon"
                      className="d-block"
                    />
                  </span>
                  <div>
                    <h6 className="mb-3">Monday - Friday</h6>
                    <p>8:00am - 6:00pm</p>
                  </div>
                </div>
                <div
                  className="d-flex mt-3 align-items-end"
                  style={{background: "#fff"}}
                >
                  <span
                    className="d-block position-relative"
                    style={{marginBottom: "20px", marginRight: "1.5rem"}}
                  >
                    <img
                      src="./images/clock.svg"
                      alt="icon"
                      className="d-block"
                    />
                  </span>
                  <div>
                    <h6 className="mb-3">Monday - Friday</h6>
                    <p>8:00am - 5:00pm</p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <img
                  src="./images/email.svg"
                  className="mt-2 d-block"
                  style={{marginRight: "1.5rem"}}
                  alt="icon"
                />
                <h6 className="pt-3">info@cashdrive.co</h6>
              </div>
            </div>
          </div>
          <div className="col-md-8 my-4">
            {data.map((faq, index) => (
              <FaqItem data={faq} key={index} styles={styles} />
            ))}
          </div>
        </div>
      </div>
      <Strip />
    </>
  );
}

export default FaqHero;
