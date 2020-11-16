import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

function OurCultureSlide() {
  return (
    <div className="container">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        autoplay
        slidesPerView={4}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="./images/slide-img.jpg"
            style={{borderRadius: ".3rem"}}
            width="100%"
            alt="slide"
            className="shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/slide-img.jpg"
            style={{borderRadius: ".3rem"}}
            width="100%"
            alt="slide"
            className="shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/slide-img.jpg"
            style={{borderRadius: ".3rem"}}
            width="100%"
            alt="slide"
            className="shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/slide-img.jpg"
            style={{borderRadius: ".3rem"}}
            width="100%"
            alt="slide"
            className="shadow"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OurCultureSlide;
