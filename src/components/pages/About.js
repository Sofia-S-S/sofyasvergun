import React from "react";
import "./style.css";

function About() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="headline">
          <h1>About Me</h1>
        </div>
        <img
          src={require("../images/kid.jpg")}
          alt="Me 25 years ago"
          title="Me 25 years ago"
          className="foto-a"
        />
        <img
          src={require("../images/graduation.jpg")}
          alt="Student of Honer"
          title="Student of Honer"
          className="foto-b"
        />

        <p>
          I was born in a West Siberian town named Tomsk (Central-South Russia).
          I’m youngest of two children and my older sister has always been a top
          student of her class and a good example for me to be an “A” student.
        </p>
        <p>
          In middle school I fall in love with Mathematics and went to Advanced
          Math High School after. Then I went to Tomsk Institute of Business for
          Finance and Accounting. One year before graduation I applied for an
          entry level accounting position and got a job that allowed me to start
          my professional career. A year later I graduated as a student of honor
          with Special Degree in accounting (an equivalent of Master Degree in
          USA) and moved to Saint-Petersburg (second biggest city in Russia
          after Moscow) to pursue my career. Thank to my education and previous
          experience I got hired by a big architectural company
        </p>

        <p>
          Few years after my career had begin, I won a lottery for green card
          and decided to become a United States resident. I took ESL (English as
          a second language) classNamees at Wilbur Wright College all the way
          from Beginner to Advanced Level then English 101 and 102. Almost five
          years since I accepted a challenge to change the country, I decided
          that I’m ready to build a new career and enrolled to Coding Booth camp
          at Northwestern University of Chicago.
        </p>

        <p>
          By the end of March of this year I will become a certified Web
          Developer and I believe that knowledge and practical experience I got
          in this program will make me qualified for entry level front and back
          end web developer position.
        </p>
      </div>
    </div>
  );
}

export default About;
