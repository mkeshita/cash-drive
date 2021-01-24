import React, {useContext} from "react";
import {TeamContext} from "../../context/TeamContext";
import {Swiper, SwiperSlide} from "swiper/react";
import "./OurCulture.scss";

function OurCultureSlide() {
  const {teamData} = useContext(TeamContext).contextValue;

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
        autoplay={false}
        slidesPerView={4}
        loop={true}
      >
        {teamData.map((data) => (
          <SwiperSlide>
            <div className="bg-white border shadow-sm text-center p-4 team-slide">
              <div className="slideImgContainer mx-auto my-2">
                <img alt="team" src={`./images/${data.picture}.jpg`} />
              </div>
              <h6 className="pt-4">
                {data?.firstname} {data?.middlename} {data?.lastname}
              </h6>
              <p className="text-muted">{data.role || "..."}</p>
              <button
                className="btn shadow px-3 btn-blue text-white"
                style={{height: "40px", background: "#153e74"}}
              >
                <img src="./images/view.svg" alt="view" />
                &nbsp;&nbsp;View
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OurCultureSlide;
