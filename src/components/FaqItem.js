import React, {useRef, useState} from "react";
import parse from "html-react-parser";

function FaqItem({data, styles}) {
  const ref = useRef(null);
  const [height, setheight] = useState(70);
  function toggleHeight() {
    if (height === 70) {
      setheight(() => ref.current.clientHeight + 70);
      console.log(height);
    } else {
      setheight(70);
      console.log(height);
    }
  }
  return (
    <div
      className={`faq__item mb-3 shadow ${styles && "border"}`}
      style={{
        height: height + "px",
        transition: `height .2s linear`,
        // border: styles ? styles.border : null,
        boxShadow: styles ? styles.boxShadow : null,
      }}
    >
      <div
        className="faq__header d-flex justify-content-between align-items-center"
        onClick={() => toggleHeight()}
      >
        <h3 className="faq__title p-0 m-0">{data.question}</h3>

        <span className="faq__plus">{height < 100 ? "+" : "-"}</span>
      </div>
      <div className="faq__content" ref={ref} style={{lineHeight: 1.7}}>
        {parse(data.answer)}
      </div>
    </div>
  );
}

export default FaqItem;
