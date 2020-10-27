import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

function Navbar() {
    return (
        <>
            <nav className="nav d-flex align-items-center">
                <div className="container-fluid d-flex">
                    
                    <div className='nav__menu d-flex justify-content-between align-items-center px-5'>
                        <div className="nav__item-left d-flex align-items-center">
                            <Link to="/" >
                                <img src="./images/logo.png" className="nav__logo"/>
                            </Link>
                            <div>
                                <Link to="/" className="nav__link">
                                    About Us
                                </Link>
                                <Link to="/" className="nav__link">
                                    How it works
                                </Link>
                                <Link to="/" className="nav__link">
                                    Car valuation
                                </Link>
                                <Link to="/" className="nav__link">
                                    FAQs
                                </Link>
                            </div>
                        </div>

                        
                        <div className="nav__item-right">
                            <Link to="/" className="btn btn-outline mr-3">
                                Sign In
                            </Link>
                            <Link to="/" className="btn btn-white ">
                                Apply now
                            </Link>
                        </div>
                        
                    </div>
          
                </div>
               </nav>
        </>
    )
}

export default Navbar;