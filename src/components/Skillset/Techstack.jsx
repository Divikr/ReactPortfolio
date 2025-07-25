import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,

} from "react-icons/di";
import {
 SiTypescript,
  SiPostgresql,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiExpress,
  SiBootstrap,
  SiCss3
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiHtml5 />
    </div>
    <div className="tech-label">HTML</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiCss3 />
    </div>
    <div className="tech-label">CSS</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiBootstrap />
    </div>
    <div className="tech-label">Bootstrap</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <DiJavascript1 />
    </div>
    <div className="tech-label">JavaScript</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <DiNodejs />
    </div>
    <div className="tech-label">Node.js</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiExpress />
    </div>
    <div className="tech-label">Express</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <DiReact />
    </div>
    <div className="tech-label">React</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiRedux />
    </div>
    <div className="tech-label">Redux</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiMongodb />
    </div>
    <div className="tech-label">MongoDB</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiPostgresql />
    </div>
    <div className="tech-label">PostgreSQL</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiTypescript />
    </div>
    <div className="tech-label">TypeScript</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <DiGit />
    </div>
    <div className="tech-label">Git</div>
  </Col>
</Row>

  );
}

export default Techstack;
