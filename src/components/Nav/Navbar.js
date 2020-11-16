import React, {useState, useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";
import Fade from "react-reveal/Fade";

function Navbar({currentPath}) {
  const ref = useRef(null);
  const activeStyle = {color: "#0056b3"};
  const [showNav, setshowNav] = useState(false);

  const handleClick = () => {
    if (!showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setshowNav((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.addEventListener("scroll", (e) => handleNavigation(e));
    };
  });

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (window.scrollY > 200) {
      ref.current.classList.add("sticky", "shadow");
    } else {
      ref.current.classList.remove("sticky", "shadow");
    }
  };

  const closeNavigation = () => {
    console.log("did u call");
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
    setshowNav(false);
  };

  return (
    <>
      <nav className="nav d-flex align-items-center" ref={ref}>
        <div className="d-flex" style={{width: "100%"}}>
          <div className="nav__menu d-lg-flex justify-content-between align-items-center px-5">
            <div className="nav__item-left d-flex align-items-center">
              <NavLink to="/" exact onClick={closeNavigation}>
                <img src="./images/logo.png" className="nav__logo" alt="logo" />
              </NavLink>
              <div>
                <span
                  style={{cursor: "pointer"}}
                  className="nav__link position-relative nav__has-dropdown"
                >
                  Meet Cashdrive &nbsp;
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.598877 1.41473L6.59888 7.41473L12.5989 1.41473"
                      stroke=" #020249"
                      strokeLinecap="round"
                      strokeinejoin="round"
                    />
                  </svg>
                  <Fade bottom distance="40%" duration={300}>
                    <div className="position-absolute nav__dropdown shadow">
                      <NavLink
                        activeStyle={activeStyle}
                        className="nav__dropdown__link border-bottom"
                        to="/about"
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        activeStyle={activeStyle}
                        className="nav__dropdown__link"
                        to="/our-people"
                      >
                        Our People
                      </NavLink>
                    </div>
                  </Fade>
                </span>

                <NavLink
                  to="/how-it-works"
                  activeStyle={activeStyle}
                  className="nav__link"
                >
                  How it works
                </NavLink>

                <NavLink
                  to="/contact"
                  activeStyle={activeStyle}
                  className="nav__link"
                >
                  Contact Us
                </NavLink>

                <NavLink
                  to="/faq"
                  activeStyle={activeStyle}
                  className="nav__link"
                >
                  FAQs
                </NavLink>
              </div>
            </div>

            <div className="nav__item-right">
              <a href="#!" className="btn btn-outline btn-outline--blue mr-3">
                Sign In
              </a>
              <a href="#!" className="btn btn__blue text-white">
                Apply now
              </a>
            </div>
          </div>
          <div
            className={
              showNav
                ? "show nav__menu-mobile px-4 d-block d-lg-none shadow"
                : "nav__menu-mobile px-4 d-block d-lg-none"
            }
          >
            <div className="nav__menu-mobile__header d-flex align-items-center justify-content-between">
              <NavLink to="/" exact>
                <img
                  src="./images/logo.png"
                  height="25"
                  alt="logo"
                  onClick={closeNavigation}
                />
              </NavLink>
              <div className="nav__menu-mobile-btn" onClick={handleClick}>
                <span className="nav__menu-mobile-line"></span>
                <span className="nav__menu-mobile-line"></span>
                <span className="nav__menu-mobile-line"></span>
              </div>
            </div>
            <div className="nav__menu-mobile-links">
              <NavLink
                to="/about"
                className="nav__menu-mobile-link-item d-flex align-items-center justify-content-center"
                onClick={closeNavigation}
              >
                About us
              </NavLink>
              <NavLink
                to="/how-it-works"
                className="nav__menu-mobile-link-item d-flex align-items-center justify-content-center"
                onClick={closeNavigation}
              >
                How it works
              </NavLink>
              <a
                href="/#car-valuation"
                className="nav__menu-mobile-link-item d-flex align-items-center justify-content-center"
                onClick={closeNavigation}
              >
                Car valuation
              </a>
              <NavLink
                to="/faq"
                className="nav__menu-mobile-link-item d-flex align-items-center justify-content-center"
                onClick={closeNavigation}
              >
                FAQs
              </NavLink>
              <div>&nbsp;</div>
              <a
                href="#!"
                className="btn btn-block btn-outline btn-outline--blue mr-3"
                style={{height: "50px", fontSize: "1.1rem", fontWeight: 600}}
                onClick={closeNavigation}
              >
                Sign In
              </a>
              <div>&nbsp;</div>
              <a
                href="#!"
                className="btn btn-block btn__blue text-white"
                style={{height: "50px", fontSize: "1.1rem", fontWeight: 600}}
                onClick={closeNavigation}
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
