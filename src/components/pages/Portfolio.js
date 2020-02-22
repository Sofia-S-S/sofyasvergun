import React from "react";
import "./style.css";
import projects from "../../utils/projects.json";

function Portfolio() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="headline">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-wrapp">
          {projects.map(project => (
            <div className="project-card">
              <img
                className="project-image"
                alt={project.name}
                src={project.image}
              />
              <div className="project-content">
                <h1 className="project-name">{project.name}</h1>
                <h3 className="project-description">{project.description}</h3>
                <span className="project-links">
                  <a href={project.heroku} title="go to Heroku APP">
                    <img
                      className="icon"
                      src={require("../images/heroku.png")}
                      alt="heroku"
                    />
                  </a>
                  <br />
                  <a href={project.github} title="go to Github repo">
                    <img
                      className="icon"
                      src={require("../images/github.png")}
                      alt="github"
                    />
                  </a>
                  <br />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
