import React from "react";
import Strip from "../Strip/Strip";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function WorkBody() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5">
              <Fade bottom>
                <h3 className="title mb-4">Apply for a loan</h3>
              </Fade>
              <Fade bottom>
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Fade>
              <div className="mb-4 list__container">
                <Fade bottom delay={300}>
                  <div className="d-flex align-items-start pb-4">
                    <svg
                      style={{
                        maxWidth: "16px",
                        minWidth: "16px",
                        marginTop: "3px",
                      }}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.59888 9.20081L9.59888 12.2008L19.5989 2.20081M18.5989 10.2008V17.2008C18.5989 17.7312 18.3882 18.2399 18.0131 18.615C17.638 18.9901 17.1293 19.2008 16.5989 19.2008H2.59888C2.06844 19.2008 1.55974 18.9901 1.18466 18.615C0.809591 18.2399 0.598877 17.7312 0.598877 17.2008V3.20081C0.598877 2.67037 0.809591 2.16166 1.18466 1.78659C1.55974 1.41152 2.06844 1.20081 2.59888 1.20081H13.5989"
                        stroke="#153E74"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="d-block pl-3 mt-0 pt-0">
                      Consectetur adipiscing elit, tempor
                    </span>
                  </div>
                </Fade>
                <Fade bottom delay={500}>
                  <div className="d-flex pb-4 align-items-start">
                    <svg
                      style={{
                        maxWidth: "16px",
                        minWidth: "16px",
                        marginTop: "3px",
                      }}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.59888 9.20081L9.59888 12.2008L19.5989 2.20081M18.5989 10.2008V17.2008C18.5989 17.7312 18.3882 18.2399 18.0131 18.615C17.638 18.9901 17.1293 19.2008 16.5989 19.2008H2.59888C2.06844 19.2008 1.55974 18.9901 1.18466 18.615C0.809591 18.2399 0.598877 17.7312 0.598877 17.2008V3.20081C0.598877 2.67037 0.809591 2.16166 1.18466 1.78659C1.55974 1.41152 2.06844 1.20081 2.59888 1.20081H13.5989"
                        stroke="#153E74"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="d-block pl-3 pt-0 mt-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed
                    </span>
                  </div>
                </Fade>
                <Fade bottom delay={700}>
                  <div className="d-flex align-items-start pb-4">
                    <svg
                      style={{
                        maxWidth: "16px",
                        minWidth: "16px",
                        marginTop: "3px",
                      }}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.59888 9.20081L9.59888 12.2008L19.5989 2.20081M18.5989 10.2008V17.2008C18.5989 17.7312 18.3882 18.2399 18.0131 18.615C17.638 18.9901 17.1293 19.2008 16.5989 19.2008H2.59888C2.06844 19.2008 1.55974 18.9901 1.18466 18.615C0.809591 18.2399 0.598877 17.7312 0.598877 17.2008V3.20081C0.598877 2.67037 0.809591 2.16166 1.18466 1.78659C1.55974 1.41152 2.06844 1.20081 2.59888 1.20081H13.5989"
                        stroke="#153E74"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="d-block pl-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </span>
                  </div>
                </Fade>
                <a
                  className="btn px-4 mt-3 btn-orange d-inline-flex align-items-center"
                  href="#!"
                >
                  Apply Now
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <Zoom>
                <img
                  src="./images/step-one.svg"
                  alt="step one"
                  style={{width: "100%"}}
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <Zoom>
                <img
                  src="./images/step-two.png"
                  alt="step one"
                  className="mb-4 mb-md-0"
                  style={{width: "100%", borderRadius: "10px"}}
                />
              </Zoom>
            </div>
            <div className="col-md-5">
              <Fade bottom>
                <h3 className="title mb-4">Schedule an Inspection</h3>
              </Fade>
              <Fade bottom>
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Fade>

              <div className="mb-4 list__container">
                <Fade bottom delay={300}>
                  <div className="d-flex align-items-start pb-4">
                    <svg
                      style={{
                        maxWidth: "16px",
                        minWidth: "16px",
                        marginTop: "3px",
                      }}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.59888 9.20081L9.59888 12.2008L19.5989 2.20081M18.5989 10.2008V17.2008C18.5989 17.7312 18.3882 18.2399 18.0131 18.615C17.638 18.9901 17.1293 19.2008 16.5989 19.2008H2.59888C2.06844 19.2008 1.55974 18.9901 1.18466 18.615C0.809591 18.2399 0.598877 17.7312 0.598877 17.2008V3.20081C0.598877 2.67037 0.809591 2.16166 1.18466 1.78659C1.55974 1.41152 2.06844 1.20081 2.59888 1.20081H13.5989"
                        stroke="#153E74"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="d-block pl-3 mt-0 pt-0">
                      Consectetur adipiscing elit, tempor
                    </span>
                  </div>
                </Fade>
                <Fade bottom delay={500}>
                  <div className="d-flex pb-4 align-items-start">
                    <svg
                      style={{
                        maxWidth: "16px",
                        minWidth: "16px",
                        marginTop: "3px",
                      }}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.59888 9.20081L9.59888 12.2008L19.5989 2.20081M18.5989 10.2008V17.2008C18.5989 17.7312 18.3882 18.2399 18.0131 18.615C17.638 18.9901 17.1293 19.2008 16.5989 19.2008H2.59888C2.06844 19.2008 1.55974 18.9901 1.18466 18.615C0.809591 18.2399 0.598877 17.7312 0.598877 17.2008V3.20081C0.598877 2.67037 0.809591 2.16166 1.18466 1.78659C1.55974 1.41152 2.06844 1.20081 2.59888 1.20081H13.5989"
                        stroke="#153E74"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="d-block pl-3 pt-0 mt-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed
                    </span>
                  </div>
                </Fade>
                <Fade bottom delay={700}>
                  <div className="d-flex align-items-start pb-4">
                    <svg
                      style={{
                        maxWidth: "16px",
                        minWidth: "16px",
                        marginTop: "3px",
                      }}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.59888 9.20081L9.59888 12.2008L19.5989 2.20081M18.5989 10.2008V17.2008C18.5989 17.7312 18.3882 18.2399 18.0131 18.615C17.638 18.9901 17.1293 19.2008 16.5989 19.2008H2.59888C2.06844 19.2008 1.55974 18.9901 1.18466 18.615C0.809591 18.2399 0.598877 17.7312 0.598877 17.2008V3.20081C0.598877 2.67037 0.809591 2.16166 1.18466 1.78659C1.55974 1.41152 2.06844 1.20081 2.59888 1.20081H13.5989"
                        stroke="#153E74"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="d-block pl-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </span>
                  </div>
                </Fade>
                <a
                  className="btn px-4 mt-3 btn-orange d-inline-flex align-items-center"
                  href="#!"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5">
              <h3 className="title mb-4">Get Credited</h3>
              <Fade bottom>
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Fade>
              <Fade bottom>
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Fade>
              <a
                className="btn px-4 mt-3 btn-orange d-inline-flex align-items-center"
                href="#!"
              >
                Apply Now
              </a>
            </div>
            <div className="col-md-6">
              <Zoom>
                <img
                  src="./images/step-three.jpg"
                  alt="step one"
                  style={{width: "100%", borderRadius: "10px"}}
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
      <Strip />
    </>
  );
}

export default WorkBody;
