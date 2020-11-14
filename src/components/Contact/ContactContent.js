import React from "react";
import ContactInfo from "./ContactInfo";

function ContactContent() {
  const data = [
    {
      icon: "./images/map-pin.svg",
      content: "Plot 14, Ladipo Omotesho Cole Street, Lekki Phase 1 Lagos.",
      id: "01",
    },
    {
      icon: "./images/smartphone.svg",
      content: "+234 817 555 6789, ",
      id: "02",
    },
    {
      icon: "./images/mail.svg",
      content: " info@cashdrive.com",
      id: "03",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <h3 className="title mb-4">Get in touch</h3>
        <div className="row justify-content-between">
          <div className="col-md-5 order-2 order-md-0">
            <div className="border-bottom pb-3">
              <p className="mb-5">
                Vix utinam aliquando ullamcorper ex. In aeque animal reformidans
                ius, id fugit legendos deterruisset sit, ad duo docendi
                consectetuer.
              </p>
              {data.map((data) => (
                <ContactInfo key={data.id} data={data} />
              ))}
            </div>

            <div className="d-flex mt-4">
              <div className="mr-4">
                <a href="#!">
                  <img src="./images/socials/facebook.svg" alt="facebook" />
                </a>
              </div>
              <div className="mr-4">
                <a href="#!">
                  <img src="./images/socials/instagram.svg" alt="facebook" />
                </a>
              </div>
              <div className="mr-4">
                <a href="#!">
                  <img src="./images/socials/linkedin.svg" alt="facebook" />
                </a>
              </div>
            </div>
            <br />
          </div>
          <div className="col-md-6 order-0 order-md-2 mb-5 mb-md-0">
            <div className="input__container">
              <input
                className="input"
                required
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="input__container">
              <input
                className="input"
                required
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="input__container">
              <textarea
                className="textarea"
                name=""
                id=""
                required
                cols="10"
                placeholder="Message"
                rows="6"
              ></textarea>
            </div>
            <button className="btn px-5 mt-3 btn-orange">Send message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactContent;
