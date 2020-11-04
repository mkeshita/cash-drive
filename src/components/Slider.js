import React, {useState, useRef, useEffect} from "react";
import Rate from "./Rate";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);

function Slider({onSliderChange, cswiper}) {
  const [tHeight, setTHeight] = useState(0);

  // const [currentSlide, setCurrentSlide] = useState[0];
  const ref = useRef(null);

  function getHeight() {
    setTHeight(ref.current.clientHeight);
  }

  useEffect(() => {
    getHeight();
    window.addEventListener("resize", getHeight);
    return () => {
      window.addEventListener("resize", getHeight);
    };
  }, []);

  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        1160: {
          slidesPerView: 2,
        },
      }}
      spaceBetween={15}
      loop={true}
      autoplay={true}
      onSlideChange={(swiper) => onSliderChange(swiper.realIndex)}
      navigation={true}
      onSwiper={(swiper) => {
        cswiper(swiper);
      }}
    >
      <SwiperSlide>
        <div className="bg-white testimonial__container shadow-sm" ref={ref}>
          <div className="testimonial__header d-flex align-items-center">
            <div className="testimonial__avatar-container">
              <img
                alt="user"
                style={{height: "100%", width: "100%"}}
                src="./images/avatar-one.jpg"
              />
            </div>
            <div>
              <h6>Bernard Oguche</h6>
              <span className="d-inline-block">
                <Rate />
                <Rate />
                <Rate />
                <Rate />
                <Rate />
              </span>
            </div>
          </div>
          <div className="testimonial__content">
            <p>
              &ldquo;Every aspect of CashDrive's operation is excellent. Your
              loan facility made most of my financial endeavours a success.
              CashDrive is the best amongst all the financial institutions in
              Nigeria. I will recommend them to anyone in need of quick and easy
              short term loans&rdquo;.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="bg-white testimonial__container shadow-sm"
          style={{height: tHeight < 1 ? "auto" : tHeight}}
        >
          <div className="testimonial__header d-flex align-items-center">
            <div className="testimonial__avatar-container">
              <img
                alt="user"
                style={{height: "100%", width: "100%"}}
                src="./images/avatar-one.jpg"
              />
            </div>
            <div>
              <h6>Oshione Umolu</h6>
              <span className="d-inline-block">
                <Rate />
                <Rate />
                <Rate />
                <Rate />
                <Rate />
              </span>
            </div>
          </div>
          <div className="testimonial__content">
            <p>
              &ldquo;CashDrive is so swift with its disbursements and has a
              highly professional customer service. In one word I will call
              their services “nonpareil” …keep it up&rdquo;
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="bg-white testimonial__container shadow-sm"
          style={{height: tHeight < 1 ? "auto" : tHeight}}
        >
          <div className="testimonial__header d-flex align-items-center">
            <div className="testimonial__avatar-container">
              <img
                alt="user"
                style={{height: "100%", width: "100%"}}
                src="./images/avatar-one.jpg"
              />
            </div>
            <div>
              <h6>Prince Chigozie Rowland</h6>
              <span className="d-inline-block">
                <Rate />
                <Rate />
                <Rate />
                <Rate />
                <Rate />
              </span>
            </div>
          </div>
          <div className="testimonial__content">
            <p>
              &ldquo;I highly recommend CashDrive to anyone in need of urgent
              loan facility. I have used them severally and I attest to their
              efficiency and reliability&ldquo;.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
