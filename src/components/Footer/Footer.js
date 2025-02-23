import React from "react";
import {NavLink} from "react-router-dom";
import "./Footer.scss";

function Footer({location}) {
  return location === "/login" ? null : (
    <footer
      className="footer position-relative"
      style={{backgroundImage: `url(./images)`}}
    >
      <div className="container">
        <div
          className="d-flex flex-wrap
         align-items-start justify-content-between"
        >
          <div className="footer__item mb-5 mb-sm-0 ">
            <img
              className="footer__logo"
              src="./images/logo.png"
              alt="logo"
              style={{marginBottom: "1.5rem", maxWidth: "100px"}}
            />
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui,
              metus ac hac amet ut temp.
            </p>
          </div>
          <div className="footer__item mb-5 mb-sm-0 ">
            <h5 className="footer__title">Information</h5>
            <NavLink to="/about" exact className="footer__link">
              About us
            </NavLink>
            <a href="/how-it-works" className="footer__link">
              How it works
            </a>
            <a href="/#car-evaluation" className="footer__link">
              Car evaluation
            </a>
            <NavLink to="/privacy-policy" exact className="footer__link">
              Privacy Policy
            </NavLink>
          </div>
          <div className="footer__item mb-5 mb-sm-0 ">
            <h5 className="footer__title">Contact</h5>
            <p className="footer__link">+234 802 857 2566 </p>
            <p className="footer__link">+234 817 555 6789</p>
            <p className="footer__link">+234 703 491 2176</p>
            <div className="footer__social-link d-flex align-items-sm-end justify-content-center justify-content-sm-start">
              <a
                href="https://www.facebook.com/Cashdrive-100248264874197/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./images/fb.svg"
                  style={{height: "18px", marginRight: "1rem"}}
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/cashdrive"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./images/linkedin-in.svg"
                  style={{height: "20px", marginRight: "1rem"}}
                  alt="linkedIn"
                />
              </a>
              <a
                href="https://www.instagram.com/cashdrive/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./images/ins.svg"
                  style={{height: "18px", marginRight: "1rem"}}
                  alt="instagram"
                />
              </a>
            </div>
          </div>
          <div className="footer__item mb-5 mb-sm-0 ">
            <h5 className="footer__title">Address</h5>
            <div>
              <h6 className="footer__title footer__title--sub">Lagos Office</h6>
              <p className="footer__link">
                Plot 14, Ladipo Omotesho Cole Street, Lekki Phase 1 Lagos.
              </p>
            </div>
            <div>
              <h6 className="footer__title footer__title--sub">Abuja Office</h6>
              <p className="footer__link">
                Suite A53 Efab Shopping Mall, Area 11 Garki Abuja.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./images/footer__bg.png"
        className=""
        style={{marginTop: "0rem", width: "100%"}}
        alt="background"
      />
    </footer>
  );
}

export default Footer;
