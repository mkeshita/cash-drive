import React from "react";
import Fade from "react-reveal/Fade";

function WhyItem({data}) {
  return (
    <>
      <Fade bottom delay={Number(data.id) * 400}>
        <div className="why__icon-container mb-4">
          <img src={data.img} alt="Why section" />
        </div>
        <h5 className="why__title">{data.title}</h5>
        <p>{data.text}</p>
      </Fade>
    </>
  );
}

export default WhyItem;
