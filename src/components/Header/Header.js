import React from "react";
import "header.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="index.html">Romie Hecdivert</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="navAbout">
              <a className="nav-link" href="index.html">About</a>
            </li>
            <li className="navPortfolio">
              <a className="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li className="navContact">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>    
          </ul>
        </div>  
      </nav>
    )
}

export default Header;