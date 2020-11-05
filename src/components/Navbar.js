import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";

function Navbar({currentPath}) {
  const activeStyle = {color: "#0056b3"};
  return (
    <>
      <nav className="nav d-flex align-items-center">
        <div className="container-fluid d-flex">
          <div className="nav__menu d-lg-flex justify-content-between align-items-center px-5">
            <div className="nav__item-left d-flex align-items-center">
              <NavLink to="/" exact>
                <img src="./images/logo.png" className="nav__logo" alt="logo" />
              </NavLink>
              <div>
                <NavLink
                  to="/about"
                  activeStyle={activeStyle}
                  exact
                  className="nav__link"
                >
                  About Us
                </NavLink>

                <NavLink to="/how-it-works" exact className="nav__link">
                  How it works
                </NavLink>

                {currentPath.pathname === "/" && (
                  <a href="/#car-valuation" exact className="nav__link" id="">
                    Car valuation
                  </a>
                )}

                <NavLink
                  to="/faq"
                  activeStyle={activeStyle}
                  exact
                  className="nav__link"
                >
                  FAQs
                </NavLink>
              </div>
            </div>
            {currentPath.pathname === "/" ? (
              <div className="nav__item-right">
                <a href="#!" className="btn btn-outline  mr-3">
                  Sign In
                </a>
                <a href="#!" exact className="btn btn__white">
                  Apply now
                </a>
              </div>
            ) : (
              <div className="nav__item-right">
                <a href="#!" className="btn btn-outline btn-outline--blue mr-3">
                  Sign In
                </a>
                <a href="#!" exact className="btn btn__blue text-white">
                  Apply now
                </a>
              </div>
            )}
          </div>
          <div className="nav__menu-mobile d-block d-lg-none">
            <div className="nav__menu-mobile__header d-flex align-items-center justify-content-between">
              <NavLink to="/" exact>
                <img src="./images/logo.png" alt="logo" />
              </NavLink>
              <div className="nav__menu-mobile-btn">
                <span className="nav__menu-mobile-line"></span>
                <span className="nav__menu-mobile-line"></span>
                <span className="nav__menu-mobile-line"></span>
              </div>
            </div>
            <div className="nav__menu-mobile-links">
              <NavLink
                to="/about"
                className="nav__menu-mobile-link-item d-block"
              >
                About us
              </NavLink>
              <NavLink
                to="/about"
                className="nav__menu-mobile-link-item d-block"
              >
                How it works
              </NavLink>
              <NavLink
                to="/about"
                className="nav__menu-mobile-link-item d-block"
              >
                Car valuation
              </NavLink>
              <NavLink
                to="/about"
                className="nav__menu-mobile-link-item d-block"
              >
                FAQs
              </NavLink>
              <a
                href="#!"
                className="btn btn-block btn-outline btn-outline--blue"
              >
                Sign In
              </a>
              <a href="#!" className="btn btn-block btn-blue">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
