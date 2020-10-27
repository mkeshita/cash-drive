import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";

function Navbar() {

    const activeStyle = { color: "#0056b3"}

    return (
        <>
            <nav className="nav d-flex align-items-center">
                <div className="container-fluid d-flex">
                    
                    <div className='nav__menu d-flex justify-content-between align-items-center px-5'>
                        <div className="nav__item-left d-flex align-items-center">
                            <NavLink to="/"  exact>
                                <img src="./images/logo.png" className="nav__logo"/>
                            </NavLink>
                            <div>
                                <NavLink to="/about" activeStyle={activeStyle} exact className="nav__link">
                                    About Us
                                </NavLink>
                                <NavLink to="/" exact className="nav__link">
                                    How it works
                                </NavLink>
                                <NavLink to="/" exact className="nav__link">
                                    Car valuation
                                </NavLink>
                                <NavLink to="/" exact className="nav__link">
                                    FAQs
                                </NavLink>
                            </div>
                        </div>

                        
                        <div className="nav__item-right">
                            <NavLink to="/" exact className="btn btn-outline mr-3">
                                Sign In
                            </NavLink>
                            <NavLink to="/" exact className="btn btn-white ">
                                Apply now
                            </NavLink>
                        </div>
                        
                    </div>
          
                </div>
               </nav>
        </>
    )
}

export default Navbar;