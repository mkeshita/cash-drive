import React, {useState, useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";

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
                <NavLink
                  to="/about"
                  activeStyle={activeStyle}
                  className="nav__link"
                >
                  About Us
                </NavLink>

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
