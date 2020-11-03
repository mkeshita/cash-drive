import React from "react";

function WhyItem({data}) {
  return (
    <div className="col-6 col-md-3 mb-4 mb-md-0">
      <div className="why__icon-container mb-4">
        <img src={data.img} alt="Why section" />
      </div>
      <h5 className="why__title">{data.title}</h5>
      <p>{data.text}</p>
    </div>
  );
}

export default WhyItem;
