import React from "react";
import CardItem from "./CardItem";

function Cards() {
  const data = [
    {
      title: "Apply",
      textContent: "Submit loan request and car details",
      color: "#FFE2E4",
      img: "./images/edit-list.svg",
    },
    {
      title: "Schedule inspection",
      textContent: "Get instant offer & schedule car inspection",
      color: "#DBF8EE",
      img: "./images/date.svg",
    },
    {
      title: "Get Credited",
      textContent: "Sign documentation & get cash in minutes",
      color: "#E2EBFF",
      img: "./images/credit-card-payment.svg",
    },
  ];
  return (
    <>
      <div className="d-flex justify-content-between align-items-strech flex-wrap mt-5 pt-3 position-relative">
        {data.map((item, number) => {
          return <CardItem key={number.toString()} data={item} />;
        })}
        <img
          src="./images/sq.dot.png"
          className="position-absolute"
          style={{right: "-7%", bottom: "-50px", zIndex: 0}}
          alt="pattern"
        />
      </div>
    </>
  );
}

export default Cards;
