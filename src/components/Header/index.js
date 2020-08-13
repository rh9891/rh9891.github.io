import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Header/style.css";

function Header() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-md bg-info text-white navbar-light">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link text-white"}>Romie Hecdivert</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="navAbout">
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link text-white"}>About</Link>
            </li>
            <li className="navPortfolio">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link text-white"}>Portfolio</Link>
            </li>
            <li className="navContact">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link text-white"}>Contact</Link>
            </li>    
          </ul>
        </div>  
      </nav>
    )
}

export default Header;