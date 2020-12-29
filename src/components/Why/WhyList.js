import React from "react";
import WhyItem from "./WhyItem";

function WhyList() {
  let data = [
    {
      title: "Fast Disbursment",
      text: "Get your cash disbursed within 24 hours.",
      img: "./images/disbursement.png",
      id: "01",
    },
    {
      title: "Flexible Repayment",
      text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
      img: "./images/repayment.png",
      id: "02",
    },
    {
      title: "No Guarantor Required",
      text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
      img: "./images/guarantor.png",
      id: "03",
    },
    {
      title: "Safe, Secure & Confidential",
      text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
      img: "./images/secure.png",
      id: "04",
    },
  ];
  return (
    <>
      <div className="row why__list">
        {data.map((item) => {
          return (
            <div key={item.id} className="col-6 col-md-3 mb-4 mb-md-0">
              <WhyItem data={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WhyList;
