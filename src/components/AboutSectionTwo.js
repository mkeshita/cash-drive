import React from "react";
import ExItem from "./ExItem";

function AboutSectionTwo() {
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
    },
    {
      title: "Business",
      content:
        "Starting a new business, or you just want to invest in an idea.",
      icon: "./images/suitcase.svg",
      color: "#E2EBFF",
    },
    {
      title: "Holiday",
      content: "Planning a get away trip, we're on your side..",
      icon: "./images/plane.svg",
      color: "#DBF8EE",
    },
  ];
  return (
    <section className="section section--bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h4 className="title--small">What people are saying</h4>
            <h2 className="title">Why Choose us?</h2>
            <br />
            <div className="row">
              {data.map((data) => (
                <ExItem data={data} />
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="./images/about-img.jpg"
              alt="about image"
              style={{width: "100%", borderRadius: "12px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSectionTwo;
