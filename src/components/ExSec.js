import React from "react";
import Zoom from "react-reveal/Zoom";
import "./Ex.scss";
import ExItem from "./ExItem";

function ExSec() {
  const data = [
    {
      title: "Marketing",
      content: "For your medical bills and emergencies.",
      icon: "./images/megaphone.svg",
      color: "#DBF8EE",
    },
    {
      title: "Home Improvement",
      content: "Interior decor, New house or just general home improvements..",
      icon: "./images/home.svg",
      color: "#FFE2E4",
      delay: 300,
    },
    {
      title: "Business",
      content:
        "Starting a new business, or you just want to invest in an idea.",
      icon: "./images/suitcase.svg",
      color: "#E2EBFF",
      delay: 600,
    },
    {
      title: "Holiday",
      content: "Planning a get away trip, we're on your side..",
      icon: "./images/plane.svg",
      color: "#DBF8EE",
      delay: 900,
    },
    {
      title: "School",
      content: "Tuition fees and school needs, we're on your side.",
      icon: "./images/school.svg",
      color: "#FFE2E4",
      delay: 1200,
    },
    {
      title: "Family needs",
      content: "Your household needs and emergies, we're on your side.",
      icon: "./images/family.svg",
      color: "#E2EBFF",
      delay: 1200,
    },
  ];

  return (
    <section
      className="section position-relative"
      id="car-valuation"
      style={{
        backgroundImage: `url(./images/ex-pattern.png)`,
        backgroundPosition: "right 70%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3 className="title">We’re on your side</h3>
            <p className="sub">
              Unexpected financial events happen, and we're happy to help.
            </p>
            <div className="row">
              {data.map((data, index) => (
                <ExItem key={index} data={data} />
              ))}
            </div>
          </div>
          <div className="col-md-6 pt-4">
            <Zoom>
              <img
                src="./images/shakehands.jpg"
                alt="shake hands"
                style={{width: "100%"}}
              />
            </Zoom>
          </div>
        </div>
      </div>
      {/* <img
        src="./images/ex-pattern.png"
        className="position-absolute ex__pattern"
        alt=""
      ></img> */}
    </section>
  );
}

export default ExSec;
