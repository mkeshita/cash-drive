import React, {useState} from "react";
import Slider from "../Slider";
import "./Testimonial.scss";

function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setswiper] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center mt-4">
          <div className="col-md-4">
            <h5 className="title--small">Testimonials</h5>
            <h3 className="title">Reviews from real clients</h3>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{maxWidth: "200px", marginTop: "4rem"}}
            >
              {swiper && (
                <div
                  className="testimonial__control my-4 position-relative shadow d-flex align-items-center justify-content-center"
                  onClick={() => swiper.swiper.slidePrev()}
                  style={{zIndex: 200}}
                >
                  <img
                    alt="left arrow"
                    src="./images/arrow-left.svg"
                    style={{maxWidth: "20px"}}
                  />
                </div>
              )}

              <span>{activeSlide}/3</span>
              {swiper && (
                <div
                  className="testimonial__control shadow d-flex align-items-center justify-content-center"
                  onClick={() => swiper.swiper.slideNext()}
                >
                  <img
                    alt="left arrow"
                    src="./images/arrow-left.svg"
                    style={{maxWidth: "20px", transform: `rotate(180deg)`}}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-8 position-relative">
            <img
              src="./images/testimonial-pattern.png"
              className="testimonial__pattern"
              alt="patterned dot"
            />
            <Slider
              cswiper={(cswiper) => {
                setswiper({swiper: cswiper});
              }}
              onSliderChange={(activeIndex) => {
                setActiveSlide(activeIndex + 1);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
