import React from "react";
import Fade from "react-reveal/Fade";

function ExItem({data}) {
  return (
    <Fade bottom delay={data.delay}>
      <div className="col-12 col-sm-5 my-2">
        <div className="ex__icon-container" style={{background: data.color}}>
          <img alt="icon" src={data.icon} style={{maxHeight: "23px"}} />
        </div>
        <h4 className="ex__title">{data.title}</h4>
        <p>{data.content}</p>
      </div>
    </Fade>
  );
}

export default ExItem;
