import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand p-2 bg-info text-white">
                Sandesh Menjoge
            </Link>
            <div className="navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav" id="links-in-nav">
                    <Link to="/about" className={location.pathname === "/" || location.pathname === "/about" || location.pathname === "/remapp"? "nav-item nav-link active" :"nav-item nav-link" }>
                        About
                    </Link>
                    <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-item nav-link active" :"nav-item nav-link" }>
                        Portfolio
                    </Link>
                    <Link to="/contact" className={location.pathname === "/contact" ? "nav-item nav-link active" :"nav-item nav-link" }>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;