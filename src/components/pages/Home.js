import React from "react";
import "./style.css";

function Home() {
  return (
    <div>
      <div className="wrapper">
        <div className="profile">
          <img
            src={require("../images/I-am.png")}
            alt="avatar"
            className="avatar"
            title="Hi stranger!"
          />
          <h1 className="my-name">Sofya Svergun</h1>

          <h3>
            <img
              className="icon-mini"
              src={require("../images/sound-speaker.png")}
              alt="Pronnounces name"
            />{" "}
            So-FI-a Sveir-GOON
          </h3>
          <h2>
            Full Stack Web Developer <br />
            Entry level
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
