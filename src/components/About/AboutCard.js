import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I'm <span className="purple"> Harsh Dhingra </span>
            from <span className="purple">India.</span>
            <br />
            <br />  I hold a Bachelor's degree in Computer Engineering from Trinity College Dublin. I'm passionate about Artificial Intelligence and have embarked on a fulfilling career journey.
            <br />
            <br />
            Presently, I'm thriving as a Data Scientist at Lighthouse Global, contributing to innovative solutions for eDiscovery products.
            <br />
            <br />
            Beyond my professional life, I find joy in various activities, such as
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Making a difference is not a task; it's a purpose, an aspiration, and a commitment to leave an indelible mark on the world!"{" "}
          </p>
          <footer className="blockquote-footer">Harsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
