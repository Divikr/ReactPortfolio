import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiFigma
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiVisualstudiocode />
    </div>
    <div className="tech-label">VS Code</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiPostman />
    </div>
    <div className="tech-label">Postman</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiVercel />
    </div>
    <div className="tech-label">Vercel</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiGithub />
    </div>
    <div className="tech-label">GitHub</div>
  </Col>

  <Col xs={6} md={3} className="tech-icons-col">
    <div className="tech-icons">
      <SiFigma />
    </div>
    <div className="tech-label">Figma</div>
  </Col>
</Row>

  );
}

export default Toolstack;
