import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";




const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME INTRODUCE MYSELF
                </h1>
              <p className="home-about-body">
  Hi, I'm Divith, a MERN Stack Developer from Kodagu, India.
  <br /><br />
  I graduated in 2023 from Mangalore University with a Bachelor's degree in PMCs, and I've been focused on building dynamic, user-friendly web applications ever since.
  <br /><br />
  I am proficient in JavaScript, HTML, CSS, and Bootstrap, and have hands-on experience with Node.js, Express.js, MongoDB, MySQL, TypeScript, and React. I've developed an e-commerce website and worked on a range of projects that have strengthened my understanding of modern web development.
  <br /><br />
  I enjoy tackling challenging problems and expanding my skillset to stay current with the latest technologies. I am also interested in exploring new trends in web development.
</p>

              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Divikr"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/divith-k-r/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About