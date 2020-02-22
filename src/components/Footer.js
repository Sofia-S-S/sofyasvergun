import React from "react";
import "./pages/style.css";

function Footer() {
  return (
    <footer className="footer-main">
      <span className="">
        <a href="*tel:8728089464" title="call (872) 808-9464">
          <img className="icon" src={require("./images/call.png")} alt="call" />
        </a>
        <a href="mailto:sofka.vs@gmail.com">
          <img
            className="icon"
            src={require("./images/mail.png")}
            title="e-mail to Sofka.vs@gmail.com"
            alt="mail"
          />
        </a>
        <a
          href="https://github.com/sofia-s-s"
          title="go to github.com/sofia-s-s"
        >
          <img
            className="icon"
            src={require("./images/github.png")}
            alt="github"
          />
        </a>
        <br />
      </span>
    </footer>
  );
}

export default Footer;
