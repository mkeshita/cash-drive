import React from "react";
import WhyItem from "./WhyItem";

function WhyList() {
  let data = [
    {
      title: "Fast Disbursment",
      text: "Get your cash disbursed within 24 hours.",
      img: "./images/disbursement.png",
    },
    {
      title: "Flexible Repayment",
      text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
      img: "./images/repayment.png",
    },
    {
      title: "No Guarantor Required",
      text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
      img: "./images/guarantor.png",
    },
    {
      title: "Safe, Secure & Confidential",
      text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
      img: "./images/secure.png",
    },
  ];
  return (
    <>
      <div className="row why__list">
        {data.map((item, number) => {
          return <WhyItem key={number.toString()} data={item} />;
        })}
      </div>
    </>
  );
}

export default WhyList;
