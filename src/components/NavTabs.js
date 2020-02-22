import React from "react";
import { Link } from "react-router-dom";
import "./pages/style.css";

function NavTabs() {
  return (
    <header className="header-main">
      <div className="page">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          <img class="icon-big" src={require("./images/home.png")} alt="home" />
          Home
        </Link>
      </div>

      <div className="page">
        <Link
          to="/about"
          className={
            window.location.pathname === "/about"
              ? "nav-link active"
              : "nav-link"
          }
        >
          <img
            className="icon-big"
            src={require("./images/contact-info.png")}
            alt="about"
          />
          About Me
        </Link>
      </div>
      <div className="page">
        <Link
          to="/portfolio"
          className={
            window.location.pathname === "/portfolio"
              ? "nav-link active"
              : "nav-link"
          }
        >
          <img
            class="icon-big"
            src={require("./images/portfolio.png")}
            alt="portfolio"
          />
          Portfolio
        </Link>
      </div>

      <div className="page">
        <Link
          to="/Resume"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          <img
            className="icon-big"
            src={require("./images/pdf.png")}
            alt="resume"
          />
          Resume
        </Link>
      </div>
    </header>
  );
}

export default NavTabs;
