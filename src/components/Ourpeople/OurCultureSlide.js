import React, {useContext} from "react";
import {TeamContext} from "../../context/TeamContext";
import {Swiper, SwiperSlide} from "swiper/react";
import "./OurCulture.scss";
import SwiperCore, {Autoplay} from "swiper";

function OurCultureSlide() {
  const {teamData, setshowModal, setIndex} = useContext(
    TeamContext
  ).contextValue;

  const handleClick = (i) => {
    setIndex(i);
    setshowModal(true);
  };

  SwiperCore.use([Autoplay]);

  return (
    <div className="oc container">
      <h4 className="title text-center pb-2 mb-3" style={{fontSize: "1.8rem"}}>
        Other teams
      </h4>
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
        autoplay={{delay: 3000}}
        slidesPerView={4}
        loop={true}
      >
        {teamData.slice(5).map((data, i) => (
          <SwiperSlide key={data.id}>
            <div className="bg-white border shadow-sm text-center p-4 mb-1 team-slide">
              <div className="slideImgContainer mx-auto my-2">
                <img
                  alt="team"
                  src={
                    data.picture
                      ? `./images/${data.picture}.jpg`
                      : `./images/profile-pix.png`
                  }
                />
              </div>
              <h6 className="pt-4 text-truncate" style={{whiteSpace: "nowrap"}}>
                {data?.firstname} {data?.middlename} {data?.lastname}
              </h6>
              <p
                className="text-muted text-truncate"
                data-toggle="tooltip"
                data-placement="top"
                title="Tooltip on top"
              >
                {data.role || "..."}
              </p>
              <button
                className="btn shadow px-3 btn-blue text-white"
                style={{height: "40px", background: "#153e74"}}
                onClick={() => handleClick(data.id)}
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
