import React from "react";
import "./Hero.scss";
import HeroForm from "./HeroForm";
import Fade from "react-reveal/Fade";
import AnimatedSvg from "../AnimatedSvg";
import TextAnimation from "../TextAnimation";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import Api from "../../utils/api";

function Hero() {
  const [showModal, setModal] = React.useState(false);
  const [showLoader, setLoader] = React.useState(false);
  const [loan_details, setLoan] = React.useState({});

  const getLoanDetails = (data) => {
    setLoan({...loan_details, ...data});
    setModal(true);
  };

  const estimateLoan = async (data) => {
    setLoader(true);
    const response = await Api.post(`${Api.ENDPOINTS.url}/estimate`, data);
    const {status} = response;
    if (status) {
      const encoded = btoa(JSON.stringify(response));
      window.location.href = `https://cashdrive-app.netlify.app/register?token=${encoded}`;
      return;
    }
    setLoader(false);
  };

  return (
    <div
      id="hero"
      className="hero position-relative container-fluid"
      style={{
        backgroundImage: `url('./images/Hero.png')`,
        backgroundPosition: "55% bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {showLoader && <Loader />}

      {/* <img src="./images/hero-bg.jpg" className="hero__bg" /> */}
      <div className=" px-md-5 px-3 mx-0 mx-md-5">
        <div className="col-md-6  d-md-none">
          <AnimatedSvg />
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 mb-5">
            <h5 className="hero__title__small hero__resp">Quick loans</h5>

            <Fade left duration={1500} delay={300}>
              <TextAnimation />
            </Fade>
            <Fade left duration={1500} delay={600}>
              <h2 className="hero__title">For Car Owners</h2>
            </Fade>
            <Fade bottom duration={1500} delay={600}>
              <p className="hero__lead-text">
                Using your car as collateral and still drive it
              </p>
            </Fade>
            <HeroForm showModal={getLoanDetails} />
          </div>
          <div className="col-md-6 d-none d-md-block">
            <AnimatedSvg />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          closeModal={() => setModal(false)}
          submitVehicle={(data) => {
            getLoanDetails(data);
            estimateLoan({...data, ...loan_details});
          }}
        />
      )}
    </div>
  );
}

export default Hero;
